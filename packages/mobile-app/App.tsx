import 'core-js/es7/reflect';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { store } from './common/store/store';
import useSecuredAccessToken from './auth/hooks/useSecuredAccessToken';
import { accessTokenReceived } from './auth/store/slice';

export default function App() {
  const colorScheme = useColorScheme();

  const cachedResourcesLoaded = useCachedResources();
  const accessToken = useSecuredAccessToken();

  const isLoadingComplete = cachedResourcesLoaded && accessToken.ready;

  if (!isLoadingComplete) {
    return null;
  } else {
    store.dispatch(accessTokenReceived({ accessToken: accessToken.token }));

    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <Provider store={store}>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </Provider>
      </ApplicationProvider>
    );
  }
}
