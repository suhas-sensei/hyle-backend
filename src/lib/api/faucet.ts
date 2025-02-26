// src/lib/api/faucet.ts
export async function faucetRequest(params: { username: string; token: string }) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_NODE_URL}/v1/wallet/faucet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: params.username + ".hydentity",
        token: params.token,
      }),
    });
  
    if (!response.ok) {
      throw new Error(await response.text());
    }
  
    return response.json();
  }