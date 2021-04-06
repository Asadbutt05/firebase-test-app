import { StyleSheet } from "react-native";
import * as util from "../utilities/index";
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
  },
  column: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
  sectionContainerCenter: {
    paddingHorizontal: util.WP(5),
    paddingVertical: util.WP(3),
    alignItems: "center",
  },
  sectionContainer: {
    paddingHorizontal: util.WP(5),
    paddingVertical: util.WP(3),
  },
  blackButtonFull: {
    flexDirection: "row",
    width: util.WP(90),
    borderRadius: 10,
    backgroundColor: "#000",
    height: util.WP(13),
    paddingHorizontal: util.WP(2),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: util.WP(2),
  },
  blackButtonLarge: {
    flexDirection: "row",
    width: util.WP(75),
    borderRadius: 10,
    backgroundColor: "#000",
    height: util.WP(13),
    paddingHorizontal: util.WP(2),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: util.WP(2),
  },
  blackButtonMedium: {
    flexDirection: "row",
    width: util.WP(55),
    borderRadius: 10,
    backgroundColor: "#000",
    height: util.WP(13),
    paddingHorizontal: util.WP(2),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: util.WP(2),
  },
  blackButtonText: { fontSize: util.WP(4), fontWeight: "600", color: "white" },
  sectionTitle: {
    fontSize: util.WP(6),
    fontWeight: "700",
    color: "#414141",
  },
  sectionDescription: {
    fontSize: util.WP(4),
    fontWeight: "600",
    color: "#828282",
  },
  sectionDescriptionSmall: {
    fontSize: util.WP(3),
    fontWeight: "600",
    color: "#828282",
  },
  sectionDescriptionSmallBlack: {
    fontSize: util.WP(3),
    fontWeight: "600",
    color: "#000",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: util.WP(15),
  },
  headerIconContainer: {
    width: util.WP(15),
    alignItems: "center",
  },
  headerTitleContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: util.WP(2),
    width: util.WP(70),
  },
  inputStyleHalf: {
    backgroundColor: "#F5F6FA",
    paddingHorizontal: util.WP(3),
    paddingVertical: util.WP(4),
    width: util.WP(45),
    fontSize: util.WP(4),
    fontWeight: "600",
    marginVertical: util.WP(1),
  },
  inputStyle: {
    backgroundColor: "#F5F6FA",
    paddingHorizontal: util.WP(3),
    paddingVertical: util.WP(4),
    width: util.WP(90),
    fontSize: util.WP(4),
    fontWeight: "600",
  },
  heading: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: util.WP(6),
  },
});

export default styles;
