import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts, Size } from '../../styles/fonts';

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
    fontFamily: fonts.regular,
    fontSize: 10,
    color: colors.gray,
    width: 24,
    textAlign: 'center',
  },
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
  title:{
    color:colors.primaryDark,
    fontSize:Size.md,
    fontWeight:'bold'
  }
});