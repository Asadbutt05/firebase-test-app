import React from "react";

import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import * as util from "../../utilities/index";
import styles from "../../styles";
class Header extends React.Component {
  static navigationOptions = () => ({
    header: null,
  });

  backIcon() {
    return (
      <Icon
        name="arrow-left"
        size={util.WP(6)}
        type="font-awesome"
        color="#fff"
        onPress={() => {
          const { navigation } = this.props;
          navigation.goBack();
        }}
      />
    );
  }

  render() {
    return (
      <View style={styles.common.headerContainer}>
        <View style={styles.common.headerIconContainer}>
          <Text>Back</Text>
        </View>
        <View style={styles.common.headerTitleContainer} />
        <View style={styles.common.headerIconContainer} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    user: auth.user,
  };
};
// eslint-disable-next-line
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
