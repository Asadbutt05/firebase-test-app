import React from "react";
import { ScrollView, Text, StatusBar, SafeAreaView, View, Button, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import styles from "../../styles";

class Home extends React.Component {
  static navigationOptions = ({navigationOptions}) => {
    return {headerShown: false};
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={styles.common.body}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.common.heading}>Home Page</Text>
        <View style={styles.home.container}>
          <TouchableOpacity style={styles.home.button}>
            <Text>Send Notification!</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
