import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

import { getCategories } from '../../utils/categories';
import i18n from '../../i18n';
import { GuildIcon } from '../GuildIcon';
import { useTheme } from '../../hooks/theme';
import { CalendarSvg, PlayerSvg } from '../../assets';
import { GuildDataProps } from '../Guild';

import { createStyles } from './styles';

export type AppointmentDataProps = {
  id: string;
  guild: GuildDataProps;
  category: string;
  description: string;
  date: string;
};

export type AppointmentProps = RectButtonProps & {
  data: AppointmentDataProps;
  handleEdit: () => void;
  handleDelete: () => void;
};

export const Appointment = ({
  data,
  handleDelete,
  handleEdit,
  ...otherProps
}: AppointmentProps) => {
  const categories = useMemo(() => getCategories(), [i18n.locale]);
  const category = categories.find(({ id }) => id === data.category);
  const { owner, name, id, icon } = data?.guild;
  const editedDate = `${data.date.split(' ')[0]} ${i18n.t(
    'appointmentCreate.at'
  )} ${data.date.split(' ')[1]}`;

  const { theme } = useTheme();
  const { primary, on, secondary50, secondary70 } = theme.colors;
  const styles = createStyles(theme);

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
          <View style={styles.main}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>{editedDate}</Text>
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
          <View style={styles.footer}>
            <RectButton
              style={[styles.button, styles.editButton]}
              onPress={handleEdit}
            >
              <Entypo name='edit' size={20} color={theme.colors.heading} />
            </RectButton>

            <RectButton style={styles.button} onPress={handleDelete}>
              <MaterialIcons
                name='delete'
                size={20}
                color={theme.colors.heading}
              />
            </RectButton>
          </View>
        </View>
      </View>
    </RectButton>
  );
};
