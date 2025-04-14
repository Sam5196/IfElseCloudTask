import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    gap: 8,
    borderRadius: 8,
    elevation: 3,
    width: '48%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
    flex: 1
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateContainer: {
    alignItems: 'flex-start',
  },
  dateLabel: {
    fontSize: 14,
    color: colors.gray,
    marginBottom: 4,
  },
  dateValue: {
    fontSize: 18,
    color: colors.black,
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amountLabel: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.gray,
    marginBottom: 4,
  },
  amountValue: {
    fontFamily: fonts.semiBold,
    fontSize: 18,
    color: colors.primary,
  },
  title: {
    color: colors.white,
    fontSize: 12,
  }
});