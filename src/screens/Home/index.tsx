import React, { Fragment, useCallback, useState } from 'react';
import { View, FlatList, Alert, Text } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppointmentDataProps } from '../../components/Appointment';
import i18n from '../../i18n';
import {
  Appointment,
  Background,
  ButtonAdd,
  CategorySelect,
  ListDivider,
  ListHeader,
  Loading,
  NoData,
  Profile,
} from '../../components';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';

import { styles } from './styles';

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [appointments, setAppointments] = useState<AppointmentDataProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const navigation = useNavigation();

  const handleAppointmentDetails = (
    selectedAppointment: AppointmentDataProps
  ) => navigation.navigate('AppointmentDetails', { selectedAppointment });

  const handleAppointmentCreate = () =>
    navigation.navigate('AppointmentCreate');

  const handleCategorySelect = (categoryId: string) =>
    categoryId === selectedCategory
      ? setSelectedCategory('')
      : setSelectedCategory(categoryId);

  const loadAppointments = async () => {
    try {
      const appointmentStorage = await AsyncStorage.getItem(
        COLLECTION_APPOINTMENTS
      );
      const storedAppointments: AppointmentDataProps[] = !!appointmentStorage
        ? JSON.parse(appointmentStorage)
        : [];

      if (!!selectedCategory) {
        return setAppointments(
          storedAppointments.filter(
            appointment => appointment.category === selectedCategory
          )
        );
      }
      setAppointments(storedAppointments);
    } catch (error) {
      Alert.alert(
        i18n.t('global.anErrorOccurred'),
        i18n.t('appointmentCreate.error')
      );
    } finally {
      setIsLoading(false);
    }
  };

  // useFocusEffect allows to fetch data and come back to the page; only when the screen has focus,
  // the function inside useFocusEffect runs; used together with useCallback
  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [selectedCategory])
  );

  const renderContent = () => {
    if (isLoading) {
      return <Loading />;
    }

    if (!appointments.length) {
      return <NoData message={i18n.t('home.noAppointments')} />;
    }

    return (
      <Fragment>
        <ListHeader
          title={i18n.t('home.listTitle')}
          subtitle={i18n.t('home.listSubtitle', {
            nrOfGames: appointments.length,
          })}
        />
        <FlatList
          style={styles.matches}
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment
              data={item}
              onPress={() => handleAppointmentDetails(item)}
            />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 69 }}
        />
      </Fragment>
    );
  };

  return (
    <Background>
      <View style={styles.container} accessible={true}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd onPress={handleAppointmentCreate} />
        </View>
        <View>
          <CategorySelect
            categorySelected={selectedCategory}
            handleCategorySelect={handleCategorySelect}
          />
        </View>

        {renderContent()}
      </View>
    </Background>
  );
};
