import React, { useMemo } from 'react';
import { Alert, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/auth';

import i18n from '../../i18n';
import { getRandomSentence } from '../../utils/random-greeting';
import { Avatar } from '../Avatar';

import { styles } from './styles';

type ProfileProps = {};

export const Profile = ({}: ProfileProps) => {
  const { user, signOut } = useAuth();
  const randomGreetingSentence = useMemo(
    () => getRandomSentence(i18n.t('profile.greetingSentences')),
    []
  );

  const handleSignOut = () => {
    Alert.alert(i18n.t('userMenu.logout'), i18n.t('userMenu.confirmLogout'), [
      { text: i18n.t('userMenu.no'), style: 'cancel' },
      { text: i18n.t('userMenu.yes'), onPress: () => signOut() },
    ]);
  };

  return (
    <View style={styles.container}>
      <RectButton onPress={handleSignOut}>
        <Avatar urlImage={user.avatar} />
      </RectButton>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>{i18n.t('profile.greeting')}</Text>
          <Text style={styles.username}>{user.firstName}</Text>
        </View>
        <Text style={styles.message}>{randomGreetingSentence}</Text>
      </View>
    </View>
  );
};
