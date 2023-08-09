import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { Alfajores, Celo } from "@celo/rainbowkit-celo/chains";
import celoGroups from "@celo/rainbowkit-celo/lists";
import type { AppProps } from 'next/app';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  arbitrum,
  celo,
  goerli,
  mainnet,
  optimism,
  polygon,
  zora,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    celo, 
    Alfajores
  ],
  [publicProvider()]
);

const connectors = celoGroups({
  chains,
  projectId: '72b0073f5d64124e18a0a776e93c0475',
  appName:
      (typeof document === "object" && document.title) || "YOGROCELO ",
});

// const { connectors } = getDefaultWallets({
//   appName: 'RainbowKit App',
  // projectId: 'YOUR_PROJECT_ID',
//   projectId: '72b0073f5d64124e18a0a776e93c0475',
//   chains,
// });

// const { connectors } = getDefaultWallets({
//   appName: 'RainbowKit App',
  // projectId: 'YOUR_PROJECT_ID',
//   projectId: '72b0073f5d64124e18a0a776e93c0475',
//   chains,
// });

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,

});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
