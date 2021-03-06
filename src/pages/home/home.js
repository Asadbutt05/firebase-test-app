import React from 'react';
import {
  Text,
  StatusBar,
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import styles from '../../styles';
import PushNotification from 'react-native-push-notification';
import * as utilities from '../../utilities/index';

class Home extends React.Component {
  static navigationOptions = ({navigationOptions}) => {
    return {headerShown: false};
  };

  constructor(props) {
    super(props);
    this.notif = new utilities.NotifService(this.onRegister, this.onNotif);
    this.state = {
      input: '',
      notificationData: '',
    };
  }

  onRegister = token => {
    console.log('firebase token: ', token);
  };

  onNotif = notif => {
    console.log(`notificatio:`, notif);
    this.setState({notificationData: notif.data.message});
    alert(notif.data.title + '\n' + notif.data.message);
  };

  sendNotification = () => {
    const payload = this.state.input;
    console.log('Noti data: ', payload);
    PushNotification.localNotification({
      bigText: payload, // (optional) default: "message" prop
      color: 'red', // (optional) default: system default
      vibration: 2000, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      /* iOS and Android properties */
      id: 0, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
      title: 'Hi User,', // (optional)
      message: 'Good Evening!', // (required)
      data: {title: 'Hi User,', message: payload},
    });
  };
  sendNotificationLater = seconds => {
    const payload = this.state.input;
    console.log('Noti data: ', payload);
    PushNotification.localNotificationSchedule({
      bigText: payload, // (optional) default: "message" prop
      color: 'red', // (optional) default: system default
      vibration: 2000, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      /* iOS and Android properties */
      id: 0, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
      title: 'Hi User!', // (optional)
      message: payload, // (required)
      date: new Date(Date.now() + seconds * 1000),
    });
  };
  render() {
    const {notificationData} = this.state;
    return (
      <SafeAreaView style={styles.common.body}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.common.heading}>Home Page</Text>
        <View style={styles.home.container}>
          <TextInput
            placeholder="Notification Text..."
            style={styles.home.input}
            onChangeText={text => this.setState({input: text})}
            multiline></TextInput>
          <TouchableOpacity
            style={styles.home.button}
            onPress={() => this.sendNotification()}>
            <Text style={{fontWeight: 'bold'}}>Send Notification!</Text>
          </TouchableOpacity>
          {notificationData.length > 0 && (
            <ScrollView style={styles.home.display}>
              <Text style={styles.home.textHead}>Anonymous:</Text>
              <Text>{notificationData}</Text>
            </ScrollView>
          )}
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
