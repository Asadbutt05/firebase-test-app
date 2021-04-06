import { StyleSheet } from "react-native";
import * as util from "../utilities/index";
const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: 'skyblue',
    marginTop: util.WP(18),
    padding: util.WP(4),
    borderWidth: 0.75,
    borderRadius: util.WP(3),
  },
});
export default localStyles;
