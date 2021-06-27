import { StyleSheet } from 'react-native';
import { ThemeSetting } from '../../hooks/theme';

export const createStyles = (theme: ThemeSetting) => {
  const styles = StyleSheet.create({
    container: {
      width: 48,
      height: 48,
      backgroundColor: theme.colors.secondary40,
      fontFamily: theme.fonts.text400,
      fontSize: 13,
      color: theme.colors.heading,
      textAlign: 'center',
      marginRight: 4,
      borderWidth: 1,
      borderColor: theme.colors.secondary50,
      borderRadius: 8,
    },
  });
  return styles;
};
