import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import { categories } from '../../utils/categories';
import i18n from '../../i18n';
import { GuildIcon } from '../GuildIcon';
import { CalendarSvg, PlayerSvg } from '../../assets';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { GuildDataProps } from '../Guild';

export type AppointmentDataProps = {
  id: string;
  guild: GuildDataProps;
  category: string;
  description: string;
  date: string;
};

export type AppointmentProps = RectButtonProps & {
  data: AppointmentDataProps;
};

export const Appointment = ({ data, ...otherProps }: AppointmentProps) => {
  const category = categories.find(({ id }) => id === data.id);
  const { owner, name, id, icon } = data?.guild;
  const { primary, on, secondary50, secondary70 } = theme.colors;

  return (
    <RectButton {...otherProps}>
      <View style={styles.container}>
        <LinearGradient
          style={styles.guildIconContainer}
          colors={[secondary50, secondary70]}
        >
          <GuildIcon guildId={id} iconId={icon} />
        </LinearGradient>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.category}>{category?.title}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>{data.date}</Text>
            </View>
            <View style={styles.playersInfo}>
              <PlayerSvg fill={owner ? primary : on} />
              <Text style={[styles.player, { color: owner ? primary : on }]}>
                {owner
                  ? i18n.t('appointment.guest')
                  : i18n.t('appointment.visitor')}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
};
