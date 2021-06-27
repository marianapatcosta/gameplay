import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../../hooks/theme';

import { createStyles } from './styles';

export const ButtonAdd = (props: RectButtonProps) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <RectButton style={styles.container} {...props}>
      <MaterialCommunityIcons
        name='plus'
        color={theme.colors.heading}
        size={24}
      />
    </RectButton>
  );
};
