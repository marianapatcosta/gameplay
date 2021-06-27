import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'; //in comparison with touchable opacity, rect button respects the pltform (ios or android) behaviour for tapping buttons
import { Text } from 'react-native';

import { useTheme } from '../../hooks/theme';

import { createStyles } from './styles';

type ButtonProps = RectButtonProps & {
  title: string;
};

export const Button = ({ title, enabled, ...otherProps }: ButtonProps) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <RectButton
      style={[styles.container, { opacity: enabled ? 1 : 0.5 }]}
      {...otherProps}
    >
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};
