import { StyleSheet } from 'react-native';
import { ThemeSetting } from '../../hooks/theme';

export const createStyles = (theme: ThemeSetting) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    user: {
      flexDirection: 'row',
    },
    text: {
      marginLeft: 20,
    },
    greeting: {
      fontFamily: theme.fonts.title500,
      fontSize: 24,
      color: theme.colors.heading,
      marginRight: 6,
    },
    username: {
      fontFamily: theme.fonts.title700,
      fontSize: 24,
      color: theme.colors.heading,
    },
    message: {
      fontFamily: theme.fonts.text400,
      color: theme.colors.highlight,
    },
  });

  return styles;
};
