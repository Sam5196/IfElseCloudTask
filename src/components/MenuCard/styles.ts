import { StyleSheet } from "react-native";
import { fonts, Size } from "../../styles/fonts";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    container: {
    backgroundColor:colors.white,
      paddingVertical: 12,
      paddingHorizontal: 8,
      gap:10,
      width:'48%',
      elevation:3,
      borderRadius:8
    },
    menuItem: {
      alignItems: 'center',
    },
    iconContainer: {
      backgroundColor: 'rgba(75, 106, 249, 0.1)',
      width: 48,
      height: 48,
      borderRadius: 24,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 8,
    },
    menuText: {
      fontFamily: fonts.medium,
      fontSize: 12,
      color: colors.gray,
      textAlign: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      title:{
        color:colors.primaryDark,
        fontSize:Size.md,
        fontWeight:'bold'
      }
  });