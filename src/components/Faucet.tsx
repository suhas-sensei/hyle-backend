import { useState } from 'react'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Select } from './ui/Select'
import { useFaucet } from '@/lib/hooks/useFaucet'
import { useHyllar } from '@/lib/hooks/useHyllar'
import { useToast } from '@/lib/hooks/useToast'

export function Faucet() {
  const [username, setUsername] = useState('')
  const [token, setToken] = useState('hyllar')
  const { toast } = useToast()
  
  const { getHydentityBalance, getTotalSupply } = useHyllar({
    contractName: token,
  })

  const { mutate: faucet, isPending } = useFaucet({
    onSuccess: () => {
      toast({
        title: 'Success',
        description: `Faucet successful for user ${username}.hydentity`,
      })
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      })
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    faucet({ username, token })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Select
        label="Select token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        hint={`Selected token: ${token}`}
      >
        <option value="hyllar">Hyllar</option>
        <option value="hyllar2">Hyllar2</option>
      </Select>

      <Input
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        suffix=".hydentity"
        placeholder="Enter username"
      />

      <div className="space-y-2 text-sm text-zinc-400">
        <p>Total Supply: {getTotalSupply() || 'Loading...'}</p>
        <p>
          Balance:{' '}
          {username
            ? getHydentityBalance(username) ||
              `Account ${username}.hydentity not found`
            : 'Enter username to see balance'}
        </p>
      </div>

      <Button type="submit" isLoading={isPending}>
        Request 10 tokens
      </Button>
    </form>
  )
}