import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import i18n from '../../i18n';
import { GuildIcon } from '../GuildIcon';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export type GuildDataProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

type GuideProps = TouchableOpacityProps & {
  data: GuildDataProps;
};

export const Guild = ({ data, ...otherProps }: GuideProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      {...otherProps}
    >
      <GuildIcon guildId={data.id} iconId={data.icon} />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.type}>
            {data.owner ? i18n.t('modal.admin') : i18n.t('modal.guest')}
          </Text>
        </View>
      </View>
      <Feather name='chevron-right' size={24} color={theme.colors.heading} />
    </TouchableOpacity>
  );
};
