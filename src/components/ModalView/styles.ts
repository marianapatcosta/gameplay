import { StyleSheet } from 'react-native';
import { ThemeSetting } from '../../hooks/theme';

export const createStyles = (theme: ThemeSetting) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    overlay: {
      backgroundColor: theme.colors.overlay,
      flex: 1,
    },
    bar: {
      width: 39,
      height: 2,
      borderRadius: 2,
      backgroundColor: theme.colors.secondary30,
      alignSelf: 'center',
      marginTop: 13,
    },
  });

  return styles;
};
