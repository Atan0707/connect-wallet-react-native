import '@walletconnect/react-native-compat'
import { WagmiProvider } from 'wagmi'
import { sepolia } from '@wagmi/core/chains'
// mainnet, polygon, arbitrum, 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit, defaultWagmiConfig, AppKit } from '@reown/appkit-wagmi-react-native'
import { AppKitButton, AccountButton } from '@reown/appkit-wagmi-react-native'
import { StyleSheet, View } from 'react-native';
// 0. Setup queryClient
const queryClient = new QueryClient()

import { ThemedView } from '@/components/ThemedView';

// 1. Get projectId at https://cloud.reown.com
const projectId = 'dcc4482bd0a2041c9f7c640ed274c8a2'

// 2. Create config
const metadata = {
  name: 'AppKit RN',
  description: 'AppKit RN Example',
  url: 'https://reown.com/appkit',
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com'
  }
}

const chains = [sepolia] as const

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createAppKit({
  projectId,
  wagmiConfig,
  defaultChain: sepolia, // Optional
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

export default function App() {
  return (
    <View style={styles.container}>
      <ThemedView style={styles.button}>
        <WagmiProvider config={wagmiConfig}>
          <QueryClientProvider client={queryClient}>
            <AppKit />
            <AppKitButton balance='show'/>
          </QueryClientProvider>
        </WagmiProvider>
      </ThemedView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})