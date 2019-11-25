import React, {Component} from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class AccountScreen extends Component {
  static navigationOptions = {
    title: 'Find Friends',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.welcomeContainer}>
        <Text style={styles.description}>Friend Code</Text>
        <Image
          source={
            require('../assets/images/fullsend-pierreinrl-account-name.png')
          }
          style={styles.accountQRCode}
        />

        <Text style={styles.accountName} >Big Daddy</Text>

        <TouchableOpacity onPress={() => navigate('FindFriends')} style={styles.gotoFindFriends}>
          <Text style={styles.gotoFindFriendsText}>
            Find Friends on FullSend
        </Text>
          <Text style={styles.gotoFindFriendsSubText}>
            Tap to sync your contacts
        </Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => navigate('AddFriend', { name: 'Joe' })} style={{ marginBottom: 30 }, styles.gotoFindFriends}>
          <Text style={styles.gotoFindFriendsText}>
            Add a Friend
        </Text>
          <Text style={styles.gotoFindFriendsSubText}>
            Tap to add a friend
        </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('Friends')} style={styles.gotoFindFriends}>
          <Text style={styles.gotoFindFriendsText}>
            My Friends
        </Text>
        </TouchableOpacity>


      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    
  },
  description: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  accountName: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 15,
  },
  accountQRCode: {
    alignSelf: "center",
    marginBottom: 15,

    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginTop: 3,
  },
  gotoFindFriends: {
    height: 50,
    width: 302,
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 8,
    backgroundColor: '#C4C4C4',
    shadowOffset: { width: 1, height: 1, },
    shadowColor: '#000',
    shadowOpacity: .25,
    shadowRadius: 10,
    alignSelf: "center",
    marginBottom: 15,
  },
  gotoFindFriendsText: {
    
  },
  gotoFindFriendsSubText: {
    color: '#7D7D7D',
  }
});



function gotoFindFriends(navigate) {
  console.log('yoyoyo')
  navigate('FindFriends', { name: 'Jane' })
}