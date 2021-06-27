import React, { useEffect } from 'react';
import { StatusBar, LogBox, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes';
import { Background } from './src/components/Background';
import { AuthContextProvider } from './src/hooks/auth';
import { useAsyncStorage } from './src/hooks/useAsyncStorage';
import { ThemeContextProvider } from './src/hooks/theme';
import i18n from './src/i18n';
import { COLLECTION_LOCALE } from './src/configs/database';

LogBox.ignoreLogs([
  'You are not currently signed in to Expo on your development machine.',
]);

export default function App() {
  const [areFontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });
  const { getStoredItem } = useAsyncStorage();

  const getStoredUserPreferences = async () => {
    try {
      const locale = await getStoredItem(COLLECTION_LOCALE);
      if (!!locale) {
        i18n.locale = locale;
      }
    } catch (error) {
      Alert.alert(i18n('global.anErrorOccurred'));
    }
  };

  useEffect(() => {
    getStoredUserPreferences();
  }, []);

  if (!areFontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeContextProvider>
      <Background>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </Background>
    </ThemeContextProvider>
  );
}
