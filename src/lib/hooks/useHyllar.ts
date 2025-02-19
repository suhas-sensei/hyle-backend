import { useEffect, useState } from 'react'
import {
  getContractState,
  GetContractStateResponse,
} from '@/lib/api/getContractState'

interface UseHyllarParams {
  contractName: string
}

export function useHyllar({ contractName }: UseHyllarParams) {
  const [contractState, setContractState] = useState<GetContractStateResponse | null>(
    null
  )

  useEffect(() => {
    async function fetchState() {
      try {
        const state = await getContractState({ contractName })
        setContractState(state)
      } catch (error) {
        console.error('Failed to fetch contract state:', error)
      }
    }
    fetchState()
  }, [contractName])

  const getHydentityBalance = (username: string) => {
    const hydentity = `${username}.hydentity`
    return contractState?.balances[hydentity]
  }

  const getTotalSupply = () => contractState?.total_supply

  return { contractState, getHydentityBalance, getTotalSupply }
}