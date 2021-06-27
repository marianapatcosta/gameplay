import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from '../../hooks/theme';

import { createStyles } from './styles';

export const SmallInput = (props: TextInputProps) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <TextInput style={styles.container} {...props} keyboardType='numeric' />
  );
};
