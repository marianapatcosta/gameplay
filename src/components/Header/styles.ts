import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { ThemeSetting } from '../../hooks/theme';

export const createStyles = (theme: ThemeSetting) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 104,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: getStatusBarHeight(),
      paddingHorizontal: 24,
    },
    title: {
      flex: 1,
      textAlign: 'center',
      fontFamily: theme.fonts.title700,
      fontSize: 20,
      color: theme.colors.heading,
    },
  });
  return styles;
};
