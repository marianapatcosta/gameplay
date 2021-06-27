import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import * as AuthSession from 'expo-auth-session';
import { Alert } from 'react-native';
import { COLLECTION_USER_AUTH } from '../configs/database';
import { api } from '../services/api';
import i18n from '../i18n';
import { useAsyncStorage } from './useAsyncStorage';
import { CDN_IMAGE, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE, SCOPE } from '@env';

enum ResponseTypes {
  SUCCESS = 'success',
  ERROR = 'error',
}

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
};

type AuthContextData = {
  user: User;
  isLoading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string;
    error?: string;
  };
};

const AuthContext = createContext({} as AuthContextData);

const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    getStoredItem,
    saveItemInStorage,
    removeStoredItem,
  } = useAsyncStorage();

  const signIn = async () => {
    try {
      setIsLoading(true);
      const authUrl = `${api.defaults.baseURL}oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const {
        type,
        params: { access_token, error },
      } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === ResponseTypes.SUCCESS && !error) {
        api.defaults.headers.authorization = `Bearer ${access_token}`;

        const userInfo = await api.get('/users/@me');
        const firstName = userInfo.data.username.split(' ')[0];
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;
        const userData = {
          ...userInfo.data,
          firstName,
          token: access_token,
        };
        await saveItemInStorage(COLLECTION_USER_AUTH, userData);
        setUser(userData);
      }
    } catch (error) {
      throw new Error(i18n.t('signIn.error'));
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setUser({} as User);
    try {
      await removeStoredItem(COLLECTION_USER_AUTH);
    } catch (error) {
      throw new Error(i18n.t('signOut.error'));
    }
  };

  const loadUserStorageData = async () => {
    try {
      const userStorage: User | undefined = await getStoredItem(
        COLLECTION_USER_AUTH
      );
      if (!!userStorage) {
        api.defaults.headers.authorization = `Bearer ${userStorage.token}`;
        setUser(userStorage);
      }
    } catch (error) {
      Alert.alert(i18n.t('global.anErrorOccurred'), i18n.t('signIn.error'));
    }
  };

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};

export { AuthContextProvider, useAuth };
