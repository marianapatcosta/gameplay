import { StyleSheet } from 'react-native';
import { ThemeSetting } from '../../hooks/theme';

export const createStyles = (theme: ThemeSetting) => {
  const styles = StyleSheet.create({
    container: {
      width: '78%',
      height: 1,
      backgroundColor: theme.colors.secondary40,
      alignSelf: 'flex-end',
    },
  });
  return styles;
};
