import React from 'react';
import { Image, View } from 'react-native';
import { DiscordSvg } from '../../assets';
import { CDN_IMAGE } from '@env';

import { styles } from './styles';

type GuildIconProps = {
  guildId: string;
  iconId: string | null;
};

export const GuildIcon = ({ guildId, iconId }: GuildIconProps) => {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

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
