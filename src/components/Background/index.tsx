import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { useTheme } from '../../hooks/theme';

import { createStyles } from './styles';

type BackgroundProps = {
  children: ReactNode;
};

export const Background = ({ children }: BackgroundProps) => {
  const { theme } = useTheme();
  const { secondary80, secondary100 } = theme.colors;
  const styles = createStyles(theme);

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  );
};
