import { Chain, OpenSeaSDK } from 'opensea-js';
import { InfuraProvider, ethers } from 'ethers';
import { config as dotEnvConfig } from 'dotenv';
dotEnvConfig();

export const OPENSEA_API_KEY = process.env.OPENSEA_API_KEY;
export const WALLET_PRIV_KEY = process.env.WALLET_PRIVATE_KEY;
export const INFURA_API_KEY = process.env.INFURA_API_KEY;

let provider = new InfuraProvider('sepolia', INFURA_API_KEY);

export const wallet = new ethers.Wallet(WALLET_PRIV_KEY as string, provider);

export const WALLET_ADDRESS = wallet.address;

export const sdk = new OpenSeaSDK(
  wallet,
  {
    chain: Chain.Sepolia,
    apiKey: OPENSEA_API_KEY
  },
  (line) => console.info(`MAINNET: ${line}`)
);
