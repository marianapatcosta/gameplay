import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';
import i18n from '../../i18n';
import { getRandomSentence } from '../../utils/random-greeting';
import { Avatar } from '../Avatar';

import { createStyles } from './styles';

type ProfileProps = {
  handleAvatarPress: () => void;
};

export const Profile = ({ handleAvatarPress }: ProfileProps) => {
  const { user } = useAuth();
  const randomGreetingSentence = useMemo(
    () => getRandomSentence(i18n.t('profile.greetingSentences')),
    [i18n.locale]
  );

  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <RectButton onPress={handleAvatarPress}>
        <Avatar urlImage={user.avatar} />
      </RectButton>
      <View style={styles.text}>
        <View style={styles.user}>
          <Text style={styles.greeting}>{i18n.t('profile.greeting')}</Text>
          <Text style={styles.username}>{user.firstName}</Text>
        </View>
        <Text style={styles.message}>{randomGreetingSentence}</Text>
      </View>
    </View>
  );
};
