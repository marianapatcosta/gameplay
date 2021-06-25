import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: theme.colors.secondary40,
    paddingHorizontal: 16,
    paddingVertical: 16,
    textAlignVertical: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 103,
    borderColor: theme.colors.secondary50,
  },
  message: {
    fontSize: 15,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    lineHeight: 25,
  },
});
