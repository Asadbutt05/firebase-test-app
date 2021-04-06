import React from "react";
import { SafeAreaView, Text, StatusBar, ScrollView } from "react-native";
import { connect } from "react-redux";
import styles from "../../styles/index";
import * as TASKS from "../../store/actions/index";
// eslint-disable-next-line
import * as util from "../../utilities";
class Signup extends React.Component {
  static navigationOptions = () => ({
    headerShown: false,
  });

  render() {
    return (
      <SafeAreaView style={styles.common.body}>
        <StatusBar barStyle="dark-content" />
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          <Text>Signup</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.ui.isLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signup: (params) => dispatch(TASKS.signup(params)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
