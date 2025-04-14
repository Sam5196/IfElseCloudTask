import { StyleSheet } from "react-native";
import { fonts, Size } from "../../styles/fonts";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    menuItem: {
        alignItems: 'center',
    },
    iconContainer: {
        backgroundColor: 'rgba(75, 106, 249, 0.1)',
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
    subtitle: {
        color: colors.white,
        fontSize: Size.sm
    },
    title: {
        color: colors.white,
        fontSize: Size.md,
        fontWeight: 'bold'
    },
    recentLabel: {
        color: colors.white,
        backgroundColor: colors.primary,
        paddingHorizontal:20,
        paddingVertical:8,
        borderRadius:16
    },
    filterButton: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 10,
        backgroundColor: 'transparent', 
      },
      label: {
        fontSize: Size.md,
        color: colors.gray,
        fontWeight: 'bold', 
      },
});