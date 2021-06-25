import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

type NoDataProps = {
  message: string;
};

export const NoData = ({ message, ...otherProps }: NoDataProps) => (
  <View style={styles.container} {...otherProps}>
    <Text style={styles.message}>{message}</Text>
  </View>
);
