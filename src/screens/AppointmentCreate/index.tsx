import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';

import i18n from '../../i18n';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { useAsyncStorage } from '../../hooks/useAsyncStorage';
import {
  Background,
  Button,
  CategorySelect,
  GuildIcon,
  Header,
  ModalView,
  SmallInput,
  TextArea,
} from '../../components';
import { Guilds } from '../Guilds';
import { GuildDataProps } from '../../components/Guild';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { AppointmentDataProps } from '../../components/Appointment';

export const AppointmentCreate = () => {
  const [category, setCategory] = useState<string>('');
  const [openGuildsModal, setOpenGuildsModa] = useState<boolean>(false);
  const [guild, setGuild] = useState<GuildDataProps>({} as GuildDataProps);
  const [day, setDay] = useState<string>();
  const [month, setMonth] = useState<string>();
  const [hour, setHour] = useState<string>();
  const [minute, setMinute] = useState<string>();
  const [description, setDescription] = useState<string>('');

  const [getStoredItem, saveItemInStorage] = useAsyncStorage();

  const navigation = useNavigation();

  const handleCategorySelect = (categoryId: string) => setCategory(categoryId);

  const handleOpenGuilds = () => {
    setOpenGuildsModa(true);
  };

  const handleCloseGuilds = () => {
    setOpenGuildsModa(false);
  };

  const handleGuildSelect = (guild: GuildDataProps) => {
    setGuild(guild);
    setOpenGuildsModa(false);
  };

  const handleCreateAppointment = async () => {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} ${i18n.t(
        'appointmentCreate.at'
      )} ${hour}:${minute}`,
      description,
    };
    try {
      const appointments: AppointmentDataProps[] =
        (await getStoredItem(COLLECTION_APPOINTMENTS)) || [];

      await saveItemInStorage(COLLECTION_APPOINTMENTS, [
        ...appointments,
        newAppointment,
      ]);
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert(
        i18n.t('global.anErrorOccurred'),
        i18n.t('appointmentCreate.error')
      );
    }
  };

  return (
    // KeyboardAvoidingView wraps the screen and scrolls it when the keyboard is active/visible
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Background>
        <ScrollView>
          <Header title={i18n.t('appointmentCreate.title')} />
          <Text
            style={[
              styles.label,
              { marginLeft: 24, marginTop: 36, marginBottom: 18 },
            ]}
          >
            {i18n.t('appointmentCreate.category')}
          </Text>
          <CategorySelect
            hasCheckbox
            categorySelected={category}
            handleCategorySelect={handleCategorySelect}
          />
          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {guild.icon ? (
                  <GuildIcon guildId={guild.id} iconId={guild.icon} />
                ) : (
                  <View style={styles.imagePlaceholder} />
                )}
                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name
                      ? guild.name
                      : i18n.t('appointmentCreate.selectServer')}
                  </Text>
                </View>
                <Feather
                  name='chevron-right'
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>
            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  {i18n.t('appointmentCreate.dayAndMonth')}
                </Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} value={day} onChangeText={setDay} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput
                    maxLength={2}
                    value={month}
                    onChangeText={setMonth}
                  />
                </View>
              </View>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  {i18n.t('appointmentCreate.hourAndMinutes')}
                </Text>
                <View style={styles.column}>
                  <SmallInput
                    maxLength={2}
                    value={hour}
                    onChangeText={setHour}
                  />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput
                    maxLength={2}
                    value={minute}
                    onChangeText={setMinute}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>
                {i18n.t('appointmentCreate.description')}
              </Text>
              <Text style={styles.charLimmit}>
                {i18n.t('appointmentCreate.max')}
              </Text>
            </View>
            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              value={description}
              onChangeText={setDescription}
            />
            <View style={styles.footer}>
              <Button
                title={i18n.t('appointmentCreate.schedule')}
                onPress={handleCreateAppointment}
              />
            </View>
          </View>
        </ScrollView>
      </Background>
      <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
};
