import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
  },
  titleContainer: {
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    textAlign: 'center',
  },
  titleRed: {
    fontSize: 20,
    fontFamily: theme.fonts.title700,
    color: theme.colors.primary,
  },
  buttons: {
    marginBottom: 40,
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
  },
  button: {
    height: 56,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    marginRight: 4,
  },
  confirmButton: {
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    marginLeft: 4,
  },
  buttonLabel: {
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
    textAlign: 'center',
  },
});
