import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../hooks/theme';

import { createStyles } from './styles';

type ListHeaderProps = {
  title: string;
  subtitle: string;
};

export const ListHeader = ({ title, subtitle }: ListHeaderProps) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};
