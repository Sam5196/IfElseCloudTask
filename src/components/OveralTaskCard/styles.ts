import { StyleSheet } from "react-native";
import { fonts, Size } from "../../styles/fonts";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: colors.primary,
    paddingVertical: 18,
    paddingHorizontal: 8,
    gap: 15,
    elevation: 3,
    borderRadius: 8,
    flexDirection: 'row',
    flex: 1
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
  }
});