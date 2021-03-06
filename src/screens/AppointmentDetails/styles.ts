import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { ThemeSetting } from '../../hooks/theme';

export const createStyles = (theme: ThemeSetting) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    banner: {
      width: '100%',
      height: 234,
    },
    bannerContent: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 24,
      marginBottom: 30,
    },
    title: {
      fontSize: 28,
      fontFamily: theme.fonts.title700,
      color: theme.colors.contrast,
    },
    subtitle: {
      fontSize: 13,
      fontFamily: theme.fonts.text400,
      color: theme.colors.contrast,
      lineHeight: 21,
    },
    members: {
      marginLeft: 24,
      marginTop: 27,
    },
    footer: {
      paddingHorizontal: 24,
      paddingVertical: 20,
      marginBottom: getBottomSpace(),
    },
  });

  return styles;
};
