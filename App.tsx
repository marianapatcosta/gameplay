import React from 'react';
import { StatusBar, LogBox, useColorScheme } from 'react-native';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes';
import { Background } from './src/components/Background';
import themes from './src/global/styles/themes';
import { ThemeContext } from './src/contexts/ThemeContext';
import { AuthProvider } from './src/hooks/auth';

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

  /*   const deviceTheme = useColorScheme() || 'dark'


  const theme = themes[deviceTheme] */

  if (!areFontsLoaded) {
    return <AppLoading />;
  }

  return (
    /*   <ThemeContext.Provider value={theme}> */
    <Background>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
    /*   </ThemeContext.Provider> */
  );
}
