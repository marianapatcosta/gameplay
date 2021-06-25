import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';
import { useAuth } from '../hooks/auth';
import { SignIn } from '../screens';

export const Routes = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {!user.id ? <SignIn /> : <AppRoutes />}
    </NavigationContainer>
  );
};
