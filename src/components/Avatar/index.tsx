import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, View } from 'react-native';
import { useTheme } from '../../hooks/theme';

import { createStyles } from './styles';

type AvatarProps = {
  urlImage: string;
  large?: boolean;
  hasMarginRight?: boolean;
};

export const Avatar = ({ urlImage, large, hasMarginRight }: AvatarProps) => {
  const { theme } = useTheme();
  const { secondary50, secondary70 } = theme.colors;
  const styles = createStyles(theme);

  return (
    <View>
      <LinearGradient
        style={[
          styles.container,
          {
            width: large ? 75 : 49,
            height: large ? 75 : 49,
            marginRight: hasMarginRight ? 22 : 0,
          },
        ]}
        colors={[secondary50, secondary70]}
      >
        <Image
          style={[
            styles.avatar,
            { width: large ? 72 : 46, height: large ? 72 : 46 },
          ]}
          source={{ uri: urlImage }}
        />
      </LinearGradient>
    </View>
  );
};
