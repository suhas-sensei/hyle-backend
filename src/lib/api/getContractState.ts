import { NODE_URL } from './constants'

interface GetContractStateParams {
  contractName: string
}

export interface GetContractStateResponse {
  total_supply: number
  balances: { [key: string]: number }
  allowances: [number, string[]][]
}

export async function getContractState({
  contractName,
}: GetContractStateParams) {
  const response = await fetch(
    `${NODE_URL}/v1/indexer/contract/${contractName}/state`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch contract state')
  }

  return response.json() as Promise<GetContractStateResponse>
}
