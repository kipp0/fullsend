import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationEvents } from 'react-navigation';

export default function CallScreen(props) {
  const { navigate } = this.props.navigation;
  
  return (
    <View style={styles.container}>
      <Text>{props.name}</Text>
      <Text>00:12</Text>

      <Image
        source={
          require('../assets/images/user.png')
        }
        style={styles.user}
      />
      <TouchableOpacity
        onPress={navigate('main')}
      >

      <Image
        source={
          require('../assets/images/end-call.png')
        }
        style={styles.user}
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
  },
  user: {
    width: 194,
    height: 194,
  },
});
