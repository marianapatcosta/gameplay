import React, { Fragment, useCallback, useState } from 'react';
import { View, FlatList, Alert, RefreshControl } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

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
import { useAsyncStorage } from '../../hooks/useAsyncStorage';

import { styles } from './styles';

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [appointments, setAppointments] = useState<AppointmentDataProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const navigation = useNavigation();
  const [getStoredItem] = useAsyncStorage();

  const handleAppointmentDetails = (
    selectedAppointment: AppointmentDataProps
  ) => navigation.navigate('AppointmentDetails', { selectedAppointment });

  const handleAppointmentCreate = () =>
    navigation.navigate('AppointmentCreate');

  const handleCategorySelect = (categoryId: string) =>
    categoryId === selectedCategory
      ? setSelectedCategory('')
      : setSelectedCategory(categoryId);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await loadAppointments();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);

  const loadAppointments = useCallback(async () => {
    try {
      const storedAppointments: AppointmentDataProps[] =
        (await getStoredItem(COLLECTION_APPOINTMENTS)) || [];

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
  }, []);

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
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={() => handleRefresh()}
            />
          }
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
