import { Image, StyleSheet, Platform, View, Text, Button } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import '@walletconnect/react-native-compat'
import { createAppKit, defaultConfig, AppKit } from '@reown/appkit-ethers-react-native'
import { AppKitButton } from '@reown/appkit-ethers-react-native'

// 1. Get projectId from https://cloud.reown.com
const projectId = 'Ydcc4482bd0a2041c9f7c640ed274c8a2'

// 2. Create config
const metadata = {
    name: 'AppKit RN',
    description: 'AppKit RN Example',
    url: 'https://reown.com/appkit',
    icons: ['https://avatars.githubusercontent.com/u/179229932'],
    redirect: {
      native: 'rn-w3m-ethers-sample://'
    }
  }

  const config = defaultConfig({ metadata })

  // 3. Define your chains
const mainnet = {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com'
  }
  
  const polygon = {
    chainId: 137,
    name: 'Polygon',
    currency: 'MATIC',
    explorerUrl: 'https://polygonscan.com',
    rpcUrl: 'https://polygon-rpc.com'
  }

  const chains = [mainnet, polygon]

  // 4. Create modal
    createAppKit({
        projectId,
        chains,
        config,
        enableAnalytics: true // Optional - defaults to your Cloud configuration
    })

export default function TestPage() {
  const [count, setCount] = useState(0);
  const [imageSource, setImageSource] = useState(require('@/assets/images/UBA.png'));

  const firstImage = require('@/assets/images/UBA.png');
  const secondImage = require('@/assets/images/UBA2.png');
  

  const changePicture = () => {
    setImageSource((prevSource: any) => prevSource === firstImage ? secondImage : firstImage);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/UBA.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.atan}>Test Page!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.button}>
        <Button
          title="Count + 1"
          onPress={() => {
            setCount(count + 1);
          }} />
        <ThemedText style={styles.count}>Count: {count}</ThemedText>
      </ThemedView>
      <ThemedView>
        <Button 
          title='Change picture' 
          onPress={changePicture}
        />
        <Image
          source={imageSource}
          style={styles.image}
        />
      </ThemedView>
      <AppKit />
      <AppKitButton />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  atan: {
    color: 'red',
  },
  count: {
    color: 'white',
    paddingTop: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 8,
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});