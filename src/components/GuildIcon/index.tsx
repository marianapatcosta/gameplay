import React from 'react';
import { Image, View } from 'react-native';
import { CDN_IMAGE } from '@env';
import { DiscordSvg } from '../../assets';
import { useTheme } from '../../hooks/theme';

import { createStyles } from './styles';

type GuildIconProps = {
  guildId: string;
  iconId: string | null;
};

export const GuildIcon = ({ guildId, iconId }: GuildIconProps) => {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      {!!iconId ? (
        <Image style={styles.image} source={{ uri }} resizeMode='cover' />
      ) : (
        <DiscordSvg width={40} height={40} />
      )}
    </View>
  );
};
