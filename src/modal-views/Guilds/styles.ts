import { StyleSheet } from 'react-native';
import { ThemeSetting } from '../../hooks/theme';

export const createStyles = (theme: ThemeSetting) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 24,
    },
    guilds: {
      width: '100%',
    },
  });
  return styles;
};
