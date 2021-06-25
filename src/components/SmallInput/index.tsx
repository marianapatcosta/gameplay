import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

export const SmallInput = (props: TextInputProps) => (
  <TextInput style={styles.container} {...props} keyboardType='numeric' />
);
