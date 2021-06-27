import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../hooks/theme';

import { createStyles } from './styles';

type NoDataProps = {
  message: string;
};

export const NoData = ({ message, ...otherProps }: NoDataProps) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container} {...otherProps}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};
