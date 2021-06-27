import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../hooks/theme';

import { createStyles } from './styles';

type ListDividerProps = {
  isCentered?: boolean;
};

export const ListDivider = ({ isCentered }: ListDividerProps) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View
      style={[
        styles.container,
        isCentered
          ? { marginVertical: 12 }
          : { marginTop: 2, marginBottom: 31 },
      ]}
    />
  );
};
