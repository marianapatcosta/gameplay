import React, { useMemo, useState } from 'react';
import { View, Alert, Text, Dimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather, Fontisto } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

import { Avatar, Background, Header, ModalView } from '../../components';
import { ConfirmModal } from '../../modal-views';
import { useAuth } from '../../hooks/auth';
import i18n from '../../i18n';
import { LOCALES, THEMES } from '../../utils/constants';
import { useAsyncStorage } from '../../hooks/useAsyncStorage';
import { useTheme, Theme } from '../../hooks/theme';
import { COLLECTION_LOCALE } from '../../configs/database';

import { createStyles } from './styles';

enum DROPDOWN_TYPES {
  LOCALES = 'locales',
  THEMES = 'themes',
}

export const UserProfile = () => {
  const { user, signOut } = useAuth();
  const { currentTheme, theme, defineTheme } = useTheme();
  const [selectedLocale, setSelectedLocale] = useState<string>(i18n.locale);
  const [selectedTheme, setSelectedTheme] = useState<string>(currentTheme);
  const [openedDropDown, setOpenedDropdown] = useState<string>('');
  const [openLogoutModal, setOpenLogoutModal] = useState<boolean>(false);
  const locales = useMemo(() => LOCALES, [i18n.locale]);

  const styles = createStyles(theme);

  const { saveItemInStorage } = useAsyncStorage();

  const handleLocaleSelection = async (locale: string) => {
    i18n.locale = locale;
    setOpenedDropdown('');

    try {
      await saveItemInStorage(COLLECTION_LOCALE, locale);
    } catch (error) {
      Alert.alert(i18n('global.anErrorOccurred'));
    }
  };

  const handleThemeSelection = async (theme: Theme) => {
    setOpenedDropdown('');
    defineTheme(theme);
  };

  const handleOpenLogoutModal = () => {
    setOpenLogoutModal(true);
  };

  const handleCloseLogoutModal = () => {
    setOpenLogoutModal(false);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      Alert.alert(i18n.t('global.anErrorOccurred'), error);
    }
  };

  const handleGoToDiscord = () =>
    Linking.openURL(`https://discordapp.com/users/${user.id}`);

  const commonDropdowmProps = {
    onClose: () => setOpenedDropdown(''),
    textStyle: styles.dropdownText,
    ArrowDownIconComponent: () => (
      <Feather name='chevron-down' color={theme.colors.heading} size={18} />
    ),
    ArrowUpIconComponent: () => (
      <Feather name='chevron-up' color={theme.colors.heading} size={18} />
    ),
    TickIconComponent: () => (
      <Feather name='check' color={theme.colors.heading} size={18} />
    ),
    style: styles.dropdown,
    selectedItemContainerStyle: {
      backgroundColor: theme.colors.secondary40,
    },
    listItemLabelStyle: {
      color: theme.colors.heading,
    },
  };
  //console.log(77, locales, i18n.t('userProfile.portuguese'));

  return (
    <Background>
      <Header title={i18n.t('userProfile.title')} />
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <View>
              <Text style={styles.label}>{i18n.t('userProfile.username')}</Text>
              <Text style={styles.field}>{user.username}</Text>
            </View>
          </View>
          <Avatar urlImage={user.avatar} large />
        </View>
        <View>
          <Text style={styles.label}>{i18n.t('userProfile.language')}</Text>
          <DropDownPicker
            open={openedDropDown === DROPDOWN_TYPES.LOCALES}
            value={selectedLocale}
            items={locales}
            setOpen={() => setOpenedDropdown(DROPDOWN_TYPES.LOCALES)}
            setValue={setSelectedLocale}
            onChangeValue={item => handleLocaleSelection(item as string)}
            zIndex={3000}
            zIndexInverse={1000}
            {...commonDropdowmProps}
          />
        </View>
        <View>
          <Text style={styles.label}>{i18n.t('userProfile.theme')}</Text>
          <DropDownPicker
            open={openedDropDown === DROPDOWN_TYPES.THEMES}
            value={selectedTheme}
            items={THEMES}
            setOpen={() => setOpenedDropdown(DROPDOWN_TYPES.THEMES)}
            setValue={setSelectedTheme}
            onChangeValue={item => handleThemeSelection(item as Theme)}
            zIndex={2000}
            zIndexInverse={2000}
            {...commonDropdowmProps}
          />
        </View>
        <RectButton onPress={handleOpenLogoutModal}>
          <View style={styles.logoutButton}>
            <Text style={styles.logout}>{i18n.t('userProfile.logout')}</Text>
          </View>
        </RectButton>
        <BorderlessButton
          style={styles.discordButton}
          onPress={handleGoToDiscord}
        >
          <Fontisto name='discord' size={35} color={theme.colors.heading} />
        </BorderlessButton>
      </View>
      <ModalView
        visible={openLogoutModal}
        marginTop={Dimensions.get('window').height - 150}
        closeModal={handleCloseLogoutModal}
      >
        <ConfirmModal
          title={
            <>
              {i18n.t('userProfile.confirmLogout')} Game
              <Text style={styles.titleRed}>Play</Text>?
            </>
          }
          onConfirm={handleSignOut}
          onCancel={handleCloseLogoutModal}
        />
      </ModalView>
    </Background>
  );
};
