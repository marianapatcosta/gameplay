import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  AppointmentCreate,
  AppointmentDetails,
  Home,
  UserProfile,
} from '../screens';

import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createStackNavigator();

export const AppRoutes = () => (
  <Navigator
    headerMode='none'
    screenOptions={{
      cardStyle: {
        backgroundColor: theme.colors.secondary100,
      },
    }}
  >
    <Screen name='Home' component={Home} />
    <Screen name='AppointmentDetails' component={AppointmentDetails} />
    <Screen name='AppointmentCreate' component={AppointmentCreate} />
    <Screen name='UserProfile' component={UserProfile} />
  </Navigator>
);
