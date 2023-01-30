import React, { Fragment, useCallback, useState } from 'react';
import {
  View,
  FlatList,
  Alert,
  RefreshControl,
  Dimensions,
} from 'react-native';
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
  ModalView,
  NoData,
  Profile,
} from '../../components';
import { ConfirmModal } from '../../modal-views';
import { useTheme } from '../../hooks/theme';
import { useAsyncStorage } from '../../hooks/useAsyncStorage';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';

import { createStyles } from './styles';

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [appointments, setAppointments] = useState<AppointmentDataProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [itemToDelete, setItemToDelete] = useState<AppointmentDataProps>(
    {} as AppointmentDataProps
  );
  const navigation = useNavigation();
  const { getStoredItem, saveItemInStorage } = useAsyncStorage();

  const { theme } = useTheme();
  const styles = createStyles(theme);

  const handleAppointmentDetails = (
    selectedAppointment: AppointmentDataProps
  ) => navigation.navigate('AppointmentDetails', { selectedAppointment });

  const handleAppointmentCreate = () =>
    navigation.navigate('AppointmentCreate');

  const handleGoToUserProfile = () => navigation.navigate('UserProfile');

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

  const handleDeleteAppointment = (item: AppointmentDataProps) => {
    setItemToDelete(item);
    setOpenDeleteModal(true);
  };

  const handleEditAppointment = (item: AppointmentDataProps) =>
    navigation.navigate('AppointmentCreate', { appointmentToEdit: item });

  const handleConfirmDelete = async () => {
    try {
      const storedAppointments = await getStoredItem(COLLECTION_APPOINTMENTS);
      const updatedAppointments = storedAppointments.filter(
        (appointment: AppointmentDataProps) =>
          appointment.id !== itemToDelete.id
      );
      await saveItemInStorage(COLLECTION_APPOINTMENTS, updatedAppointments);
      await loadAppointments();
    } catch (error) {
      Alert.alert(i18n.t('global.anErrorOccurred'), i18n.t('home.deleteError'));
    } finally {
      setItemToDelete({} as AppointmentDataProps);
      setOpenDeleteModal(false);
    }
  };

  const handleCloseModal = () => {
    setOpenDeleteModal(false);
  };

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
      Alert.alert(i18n.t('global.anErrorOccurred'), i18n.t('home.error'));
    } finally {
      setIsLoading(false);
    }
  }, [selectedCategory]);

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
              handleDelete={() => handleDeleteAppointment(item)}
              handleEdit={() => handleEditAppointment(item)}
            />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 69 }}
          ListHeaderComponent={() => <ListDivider isCentered />}
          ListFooterComponent={() => <ListDivider isCentered />}
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
    <Fragment>
      <Background>
        <View style={styles.container} accessible={true}>
          <View style={styles.header}>
            <Profile handleAvatarPress={handleGoToUserProfile} />
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
      <ModalView
        visible={openDeleteModal}
        marginTop={Dimensions.get('window').height - 150}
        closeModal={handleCloseModal}
      >
        <ConfirmModal
          title={i18n.t('home.deleteAppointment')}
          onCancel={handleCloseModal}
          onConfirm={handleConfirmDelete}
        />
      </ModalView>
    </Fragment>
  );
};
