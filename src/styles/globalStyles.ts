import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { fonts } from './fonts';

export const globalStyles = StyleSheet.create({
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  card: {
    borderRadius: 8,
    padding: 8,
    backgroundColor: colors.white,
    marginBottom: 12,
  },
  title: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.primary,
    fontWeight:'bold'
  },
  value: {
    fontFamily: fonts.bold,
    fontSize: 24,
    color: colors.black,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});