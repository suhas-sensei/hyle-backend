// src/pages/api/faucet.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests (OPTIONS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { username, token } = req.body;

    // TODO: Implement faucet logic here
    // For example, send tokens to the user's address

    return res.status(200).json({ message: 'Faucet request processed successfully' });
  } catch (error) {
    console.error('Faucet error:', error);
    return res.status(500).json({ error: (error as Error).message });
  }
}