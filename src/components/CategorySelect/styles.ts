import { StyleSheet } from 'react-native';

import { ThemeSetting } from '../../hooks/theme';

export const createStyles = (theme: ThemeSetting) => {
  const styles = StyleSheet.create({
    container: {
      minHeight: 120,
      maxHeight: 120,
      paddingLeft: 24,
    },
  });
  return styles;
};
