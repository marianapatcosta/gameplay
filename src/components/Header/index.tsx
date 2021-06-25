import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type HeaderProps = {
  title: string;
  action?: ReactNode;
};

export const Header = ({ title, action }: HeaderProps) => {
  const { secondary100, secondary40, heading } = theme.colors;
  const navigation = useNavigation();

  const handleGoBack = () => navigation.goBack();

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary40]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather name='arrow-left' size={24} color={heading} />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>
      {!!action ? <View>{action}</View> : <View style={{ width: 24 }} />}
    </LinearGradient>
  );
};
