import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { ThemeSetting } from '../../hooks/theme';

export const createStyles = (theme: ThemeSetting) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      height: 50,
      width: '100%',
      paddingHorizontal: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: getStatusBarHeight() + 26,
      marginBottom: 42,
    },
    matches: {
      marginTop: 24,
      marginLeft: 24,
    },
  });

  return styles;
};
