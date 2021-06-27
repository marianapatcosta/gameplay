import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Alert, useColorScheme } from 'react-native';
import { COLLECTION_THEME } from '../configs/database';
import themes from '../global/styles/themes';
import i18n from '../i18n';
import { useAsyncStorage } from './useAsyncStorage';

type Theme = 'light' | 'dark';

type ColorsTheme = {
  primary: string;
  secondary100: string;
  secondary90: string;
  secondary85: string;
  secondary80: string;
  secondary70: string;
  secondary60: string;
  secondary50: string;
  secondary40: string;
  secondary30: string;
  overlay: string;
  highlight: string;
  heading: string;
  line: string;
  on: string;
  contrast: string;
  discord: string;
};

type FontTheme = {
  title700: string;
  title500: string;
  text400: string;
  text500: string;
};

type ThemeSetting = {
  colors: ColorsTheme;
  fonts: FontTheme;
};

type ThemeContextData = {
  currentTheme: Theme;
  theme: ThemeSetting;
  defineTheme: (theme: Theme) => Promise<void>;
};

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext({} as ThemeContextData);

const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(
    (useColorScheme() as Theme) || 'dark'
  );
  const [theme, setTheme] = useState<ThemeSetting>(themes[currentTheme]);
  const { getStoredItem, saveItemInStorage } = useAsyncStorage();

  const getStoredTheme = async () => {
    try {
      const storedTheme = await getStoredItem(COLLECTION_THEME);
      if (!!storedTheme) {
        setCurrentTheme(storedTheme);
      }
    } catch (error) {
      Alert.alert(i18n.t('global.anErrorOccurred'));
    }
  };

  const defineTheme = async (theme: Theme) => {
    try {
      setCurrentTheme(theme);
      await saveItemInStorage(COLLECTION_THEME, theme);
    } catch (error) {
      Alert.alert(i18n.t('global.anErrorOccurred'));
    }
  };

  useEffect(() => {
    getStoredTheme();
  }, []);

  useEffect(() => {
    setTheme(themes[currentTheme]);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, theme, defineTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  return themeContext;
};

export { Theme, ThemeSetting, ThemeContextProvider, useTheme };
