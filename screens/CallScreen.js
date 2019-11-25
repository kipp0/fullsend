import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationEvents } from 'react-navigation';
import FakeTitleBar from '../components/FakeTitleBar';

export default function CallScreen(props) {
  // const { navigate } = this.props.navigation;
  
  return (
    <View style={styles.container}>
      {/* <FakeTitleBar  /> */}
      <Text style={styles.name}>{props.name || "Bob"}</Text>
      <Text style={styles.time}>00:12</Text>

      <Image
        source={
          require('../assets/images/user.png')
        }
        style={styles.user}
      />
      <TouchableOpacity
      >

      <Image
        source={
          require('../assets/images/end-call.png')
        }
        style={styles.endCall}
      />

      </TouchableOpacity>


    </View>
  );
}

// AccountScreen.navigationOptions = {
//   title: 'Account',
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  name: {
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 120,
    marginBottom: 20,
  },
  time: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 50,
  },
  user: {
    width: 194,
    height: 194,
    alignSelf: 'center',
    marginBottom: 150,
  },
  endCall: {
    width: 104,
    height: 104,
    alignSelf: 'center',
  },
});
