import { StyleSheet } from 'react-native';
import { ThemeSetting } from '../../hooks/theme';

export const createStyles = (theme: ThemeSetting) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      marginLeft: 20,
    },
    title: {
      fontFamily: theme.fonts.title700,
      fontSize: 18,
      color: theme.colors.heading,
    },
    status: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    nameStatus: {
      fontFamily: theme.fonts.text400,
      fontSize: 13,
      color: theme.colors.highlight,
    },
    bulletStatus: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginRight: 9,
    },
  });

  return styles;
};
