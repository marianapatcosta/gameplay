import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'; //in comparison with touchable opacity, rect button respects the pltform (ios or android) behaviour for tapping buttons
import { Text } from 'react-native';

import { styles } from './styles';

type ButtonIconProps = RectButtonProps & {
  title: string;
};

export const Button = ({ title, ...otherProps }: ButtonIconProps) => (
  <RectButton
    style={styles.container}
    accessibilityLabel={title}
    {...otherProps}
  >
    <Text style={styles.title}>{title}</Text>
  </RectButton>
);
