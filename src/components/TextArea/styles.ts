import { StyleSheet } from 'react-native';
import { ThemeSetting } from '../../hooks/theme';

export const createStyles = (theme: ThemeSetting) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 95,
      backgroundColor: theme.colors.secondary40,
      fontFamily: theme.fonts.text400,
      fontSize: 13,
      color: theme.colors.heading,
      marginRight: 4,
      paddingHorizontal: 16,
      paddingVertical: 16,
      textAlignVertical: 'top',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.colors.secondary50,
    },
  });
  return styles;
};
