// styles.ts
import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { globalStyles } from '../../styles/globalStyles';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    gap:8,
    backgroundColor:colors.white,
    borderRadius:8,
    elevation:3
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateContainer: {
    alignItems: 'flex-start',
  },
  dateLabel: {
    // fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.gray,
    marginBottom: 4,
  },
  dateValue: {
    // fontFamily: fonts.semiBold,
    fontSize: 18,
    color: colors.black,
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amountLabel: {
    // fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.gray,
    marginBottom: 4,
  },
  amountValue: {
    // fontFamily: fonts.semiBold,
    fontSize: 18,
    color: colors.primary,
  },
});