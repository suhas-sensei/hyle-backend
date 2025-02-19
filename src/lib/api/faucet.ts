import { SERVER_URL } from './constants'

interface FaucetParams {
  username: string
  token: string
}

export async function faucet({ username, token }: FaucetParams) {
  const response = await fetch(`${SERVER_URL}/faucet`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username + '.hydentity',
      token,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(error)
  }

  return response.json()
}