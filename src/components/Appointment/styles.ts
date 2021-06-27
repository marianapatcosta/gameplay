import { StyleSheet } from 'react-native';
import { ThemeSetting } from '../../hooks/theme';

export const createStyles = (theme: ThemeSetting) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      alignSelf: 'center',
    },
    content: {
      flex: 1,
    },
    header: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 12,
    },
    title: {
      fontFamily: theme.fonts.title700,
      fontSize: 18,
      color: theme.colors.heading,
    },
    category: {
      fontFamily: theme.fonts.text400,
      fontSize: 13,
      color: theme.colors.highlight,
      marginRight: 24,
    },
    main: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    dateInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    playersInfo: { flexDirection: 'row', alignItems: 'center' },
    player: {
      fontFamily: theme.fonts.text500,
      fontSize: 13,
      marginLeft: 7,
      marginRight: 24,
    },
    date: {
      fontFamily: theme.fonts.text500,
      fontSize: 13,
      color: theme.colors.heading,
      marginLeft: 7,
    },
    guildIconContainer: {
      height: 68,
      width: 64,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 20,
    },
    footer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingRight: 24,
      paddingVertical: 10,
      opacity: 0.8,
    },
    editButton: {
      marginRight: 15,
    },
  });

  return styles;
};
