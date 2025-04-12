// styles.ts
import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { globalStyles } from '../../styles/globalStyles';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  chartContainer: {
    height: 200,
    marginVertical: 16,
  },
  chart: {
    flex: 1,
  },
  xAxis: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  xAxisLabel: {
    // fontFamily: fonts.regular,
    fontSize: 10,
    color: colors.gray,
    width: 24,
    textAlign: 'center',
  },
  // Additional styles for chart elements
  chartLine: {
    height: 2,
    backgroundColor: colors.lightGray,
    marginVertical: 8,
  },
  chartHighlight: {
    position: 'absolute',
    backgroundColor: 'rgba(75, 106, 249, 0.1)',
    borderRadius: 4,
  },
});