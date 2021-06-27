import { StyleSheet } from 'react-native';
import { ThemeSetting } from '../../hooks/theme';

export const createStyles = (theme: ThemeSetting) => {
  const styles = StyleSheet.create({
    container: {
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatar: {
      borderRadius: 8,
    },
  });

  return styles;
};
