import "@walletconnect/react-native-compat";
import { WagmiConfig } from "wagmi";
import { goerli } from "viem/chains";
import {
  createWeb3Modal,
  defaultWagmiConfig,
  Web3Modal,
} from "@web3modal/wagmi-react-native";
import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { W3mButton } from "@web3modal/wagmi-react-native";

// 1. Get projectId at <https://cloud.walletconnect.com>
const projectId = "XXX";

// 2. Create config
const metadata = {
  name: "Web3Modal RN",
  description: "Web3Modal RN Example",
  url: "<https://web3modal.com>",
  icons: ["<https://avatars.githubusercontent.com/u/37784886>"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

const chains = [goerli];

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
});

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <Web3Modal />
      <View style={styles.container}>
        <W3mButton balance="show" />
      </View>
    </WagmiConfig>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});