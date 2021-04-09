import {StyleSheet} from 'react-native';
import * as util from '../utilities/index';
const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 0.75,
    borderRadius: util.WP(3),
    padding: util.WP(5),
    marginTop: util.WP(20),
    width: util.WP(80),
  },
  button: {
    backgroundColor: 'skyblue',
    marginTop: util.WP(15),
    padding: util.WP(4),
    borderWidth: 0.75,
    borderRadius: util.WP(3),
    width: util.WP(40),
    alignSelf: 'center',
  },
  display: {
    backgroundColor: 'skyblue',
    marginTop: util.WP(15),
    padding: util.WP(4),
    borderWidth: 0.75,
    borderRadius: util.WP(3),
    width: util.WP(80),
    height: util.WP(60),
    alignSelf: 'center',
    flex: 1,
    marginBottom: util.WP(4),
  },
  textHead: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
export default localStyles;
