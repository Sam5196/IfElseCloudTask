import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:8
  },
  balance: {
    fontSize: 22,
    color: colors.primaryDark,
    fontWeight:'bold'
  },
  balanceFooter: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
  },
  label: {
    fontSize: 14,
    color: colors.gray,
  },
  profitContainer: {
    backgroundColor: 'rgba(75, 106, 249, 0.1)',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  profitText: {
    fontSize: 14,
    color: colors.primary,
  },
});