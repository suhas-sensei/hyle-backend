import { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Select } from './ui/Select';
import { useFaucet } from '@/lib/hooks/useFaucet';
import { useHyllar } from '@/lib/hooks/useHyllar';
import { useToast } from '@/lib/hooks/useToast';

export function Faucet() {
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('hyllar');
  const [activeTab, setActiveTab] = useState('faucet');
  const { toast } = useToast();

  const { getHydentityBalance, getTotalSupply } = useHyllar({
    contractName: token,
  });

  const { mutate: faucet, isPending } = useFaucet({
    onSuccess: () => {
      toast({
        title: 'Success',
        description: `Faucet successful for user ${username}.hydentity`,
      });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab !== 'faucet') return;
    console.log('Submitting faucet request:', { username, token });
    faucet({ username, token });
  };

  const handleTabClick = (value: string) => {
    setActiveTab(value);
    if (value !== 'faucet') {
      toast({
        title: 'Coming Soon',
        description: `The ${value} feature is currently in development.`,
      });
    }
  };

  // Custom tab component to ensure proper styling
  const Tab = ({ value, label }: { value: string; label: string }) => (
    <button
      type="button"
      onClick={() => handleTabClick(value)}
      className={`
        inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-[1rem] font-medium
        transition-all focus-visible:outline-none disabled:pointer-events-none
        ${activeTab === value 
          ? 'bg-[#e0492e] text-white' 
          : 'bg-[#d8d8d5] text-gray-600 hover:bg-[#687382] hover:opacity-40 hover:text-white'}
      `}
    >
      {label}
    </button>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Custom tabs implementation */}
      <div className="w-full">
        <div className="inline-flex h-9.5 items-center justify-center rounded-lg bg-[#d8d8d5] p-1 text-gray-600 grid w-full grid-cols-5 gap-2">
          <Tab value="register" label="Register" />
          <Tab value="faucet" label="Faucet" />
          <Tab value="transfer" label="Transfer" />
          <Tab value="approve" label="Approve" />
          <Tab value="swap" label="Swap" />
        </div>
      </div>

      <div className="space-y-4 relative">
        {activeTab !== 'faucet' && (
          <div className="absolute inset-0 bg-[#d8d8d5]/80 backdrop-blur-sm z-10 flex items-center justify-center rounded-md">
            <div className="text-center p-6">
              <h3 className="text-xl font-medium text-gray-700 mb-2">Work in Progress</h3>
              <p className="text-gray-600">The {activeTab} feature is coming soon.</p>
              <Button 
                type="button" 
                className="mt-4 bg-[#e0492e] text-white hover:bg-[#c63a25]" 
                onClick={() => handleTabClick('faucet')}
              >
                Return to Faucet
              </Button>
            </div>
          </div>
        )}

        <Select
          label="Select token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          hint={`Selected token: ${token}`}
        >
          <option value="hyllar">Hyllar</option>
          <option value="hyllar2">Hyllar2</option>
        </Select>

        <div className="text-[16px]">
        <Input
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          suffix=".hydentity"
          placeholder="Enter username"
          
        />
</div>
        <Button type="submit" isLoading={isPending}>
          Faucet 10 {token} to {username || "username"}.hydentity
        </Button>

        <div className="space-y-1 text-sm tracking-[0.2px] text-gray-600">
          <div>Total supply: {getTotalSupply() || '10000000000'}</div>
          <div className="opacity-50">
            Balance: {username
              ? getHydentityBalance(username) ||
                `Account ${username}.hydentity not found`
              : 'Enter username to see balance'}
          </div>
        </div>
      </div>
    </form>
  );
}