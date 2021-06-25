import React from 'react';
import { Text, View, Image, Alert, ActivityIndicator } from 'react-native';

import { IllustrationImg } from '../../assets';
import { Background, ButtonIcon } from '../../components';
import { useAuth } from '../../hooks/auth';
import i18n from '../../i18n';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export const SignIn = () => {
  const { isLoading, signIn } = useAuth();

  const handleSignIn = async () => {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(i18n.t('global.anErrorOccurred'), error);
    }
  };

  return (
    <Background>
      <View style={styles.container} accessible={true}>
        <Image
          source={IllustrationImg}
          resizeMode='stretch'
          style={styles.image}
          accessibilityLabel='Discord icon'
        />
        <View style={styles.content}>
          <Text style={styles.title}>{i18n.t('signIn.title')}</Text>
          <Text style={styles.subtitle}>{i18n.t('signIn.subtitle')}</Text>

          {isLoading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon
              title={i18n.t('signIn.buttonLabel')}
              /* activeOpacity={0.7} */
              onPress={handleSignIn}
            />
          )}
        </View>
      </View>
    </Background>
  );
};
