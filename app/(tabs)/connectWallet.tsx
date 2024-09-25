import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {
  WalletConnectModal,
  useWalletConnectModal,
} from '@walletconnect/modal-react-native';

const projectId = '7c684784ed55bc73a74c1aaf288dd50f';
const providerMetadata = {
  name: 'ethKL',
  description: 'YOUR_PROJECT_DESCRIPTION',
  url: 'https://your-project-website.com/',
  icons: ['https://your-project-logo.com/'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com',
  },
};

function App() {
  const {address, open, isConnected, provider} = useWalletConnectModal();

  const handleConnection = () => {
    if (isConnected) {
      return provider?.disconnect();
    }

    return open();
  };
  
  return (
    <View style={styles.container}>
      <Button
        onPress={handleConnection}
        title={isConnected ? 'Disconnect' : 'Connect'}
      />

      <WalletConnectModal
        projectId={projectId}
        providerMetadata={providerMetadata}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});

export default App;