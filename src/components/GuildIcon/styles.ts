import { StyleSheet } from 'react-native';
import { ThemeSetting } from '../../hooks/theme';

export const createStyles = (theme: ThemeSetting) => {
  const styles = StyleSheet.create({
    container: {
      width: 62,
      height: 66,
      borderRadius: 8,
      backgroundColor: theme.colors.discord,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    image: {
      width: 62,
      height: 66,
    },
  });

  return styles;
};
