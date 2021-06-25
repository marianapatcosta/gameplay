import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, View } from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type AvatarProps = {
  urlImage: string;
};

export const Avatar = ({ urlImage }: AvatarProps) => {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <View>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <Image style={styles.avatar} source={{ uri: urlImage }} />
      </LinearGradient>
    </View>
  );
};
