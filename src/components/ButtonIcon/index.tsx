import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'; //in comparison with touchable opacity, rect button respects the pltform (ios or android) behaviour for tapping buttons
import { Text, View, Image } from 'react-native';
import { useTheme } from '../../hooks/theme';
import DiscordImg from '../../assets/discord.png';

import { createStyles } from './styles';

type ButtonIconProps = RectButtonProps & {
  title: string;
};

export const ButtonIcon = ({ title, ...otherProps }: ButtonIconProps) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <RectButton style={styles.container} {...otherProps}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};
