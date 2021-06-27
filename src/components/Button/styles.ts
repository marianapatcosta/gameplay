import { StyleSheet } from 'react-native';
import { ThemeSetting } from '../../hooks/theme';

export const createStyles = (theme: ThemeSetting) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 56,
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconWrapper: {
      width: 56,
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
      borderRightColor: theme.colors.line,
      borderRightWidth: 1,
    },
    icon: {},
    title: {
      flex: 1,
      color: theme.colors.heading,
      fontSize: 15,
      fontFamily: theme.fonts.text500,
      textAlign: 'center',
    },
  });

  return styles;
};
