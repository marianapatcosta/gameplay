import { StyleSheet } from 'react-native';
import { ThemeSetting } from '../../hooks/theme';

export const createStyles = (theme: ThemeSetting) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: 24,
    },
    header: {
      height: 50,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 26,
      marginBottom: 52,
    },
    userInfoItem: {
      flexDirection: 'row',
    },
    label: {
      fontFamily: theme.fonts.title500,
      fontSize: 20,
      color: theme.colors.heading,
      marginRight: 6,
    },
    field: {
      fontFamily: theme.fonts.title700,
      fontSize: 20,
      color: theme.colors.heading,
    },
    dropdown: {
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.colors.secondary50,
      backgroundColor: theme.colors.secondary40,
      marginBottom: 25,
      marginTop: 5,
    },
    dropdownText: {
      fontSize: 15,
      fontFamily: theme.fonts.text500,
      color: theme.colors.heading,
    },
    logoutButton: {
      flexDirection: 'row',
      width: '100%',
      height: 68,
      borderColor: theme.colors.secondary50,
      borderWidth: 1,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 70,
      overflow: 'hidden',
    },
    logout: {
      fontSize: 18,
      fontFamily: theme.fonts.title700,
      color: theme.colors.heading,
      flex: 1,
      textAlign: 'center',
    },
    discordButton: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 50,
    },
    titleRed: {
      fontSize: 20,
      fontFamily: theme.fonts.title700,
      color: theme.colors.primary,
    },
  });
  return styles;
};
