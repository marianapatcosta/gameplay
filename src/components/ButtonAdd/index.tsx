import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export const ButtonAdd = (props: RectButtonProps) => (
  <RectButton style={styles.container} {...props}>
    <MaterialCommunityIcons
      name='plus'
      color={theme.colors.heading}
      size={24}
    />
  </RectButton>
);
