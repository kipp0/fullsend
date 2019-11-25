import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class MessagesScreen extends React.Component {

  static navigationOptions = {
    title: 'Messages',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.messagesTitleText}>People</Text>

            <TouchableOpacity
              style={styles.option}
              background={Touchable.Ripple('#ccc', false)}
              onPress={() => navigate('Chat', { name: 'Dale' })}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.userIconContainer}>
                  <Image
                    source={require('../assets/images/user.png')}
                    style={styles.videoIcon}
                    size={22}
                  />
                </View>
                <View style={styles.userContainer}>
                  <Text style={styles.username}>Dale</Text>
                  <Text style={styles.userChatText}>You there?</Text>
                </View>
                <TouchableOpacity style={styles.userVideoIconContainer}>
                  <Image
                    source={require('../assets/images/video-call-50.png')}
                    style={styles.videoIcon}
                    size={22}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>


            <TouchableOpacity
              style={styles.option}
              background={Touchable.Ripple('#ccc', false)}
              onPress={() => navigate('Chat', { name: 'Jose' })}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.userIconContainer}>
                  <Image
                    source={require('../assets/images/user.png')}
                    style={styles.videoIcon}
                    size={22}
                  />
                </View>
                <View style={styles.userContainer}>
                  <Text style={styles.username}>Jose</Text>
                  <Text style={styles.userChatText}>You there?</Text>
                </View>
                <TouchableOpacity style={styles.userVideoIconContainer}>
                  <Image
                    source={require('../assets/images/video-call-50.png')}
                    style={styles.videoIcon}
                    size={22}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>


            <TouchableOpacity
              style={styles.option}
              background={Touchable.Ripple('#ccc', false)}
              onPress={() => navigate('Chat', { name: 'Armondo' })}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.userIconContainer}>
                  <Image
                    source={require('../assets/images/user.png')}
                    style={styles.videoIcon}
                    size={22}
                  />
                </View>
                <View style={styles.userContainer}>
                  <Text style={styles.username}>Armondo</Text>
                  <Text style={styles.userChatText}>You there?</Text>
                </View>
                <TouchableOpacity style={styles.userVideoIconContainer}>
                  <Image 
                    source={ require('../assets/images/video-call-50.png') }
                    style={styles.videoIcon}
                  size={22}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <Touchable
              style={styles.option}
              background={Touchable.Ripple('#ccc', false)}
              onPress={() => navigate('Chat', { name: 'Jesus' })}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.userIconContainer}>
                  <Image
                    source={require('../assets/images/user.png')}
                    style={styles.videoIcon}
                    size={22}
                  />
                </View>
                <View style={styles.userContainer}>
                  <Text style={styles.username}>Jesus</Text>
                  <Text style={styles.userChatText}>You there?</Text>
                </View>
                <TouchableOpacity style={styles.userVideoIconContainer}>
                  <Image
                    source={require('../assets/images/video-call-50.png')}
                    style={styles.videoIcon}
                    size={22}
                  />
                </TouchableOpacity>
              </View>
            </Touchable>



          </View>

        </ScrollView> 
      </View>
      
    );
  }

  _handleNavigation = (person) => {
    
    
  };

  _handlePressForums = () => {
    WebBrowser.openBrowserAsync('http://forums.expo.io');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  
  messagesTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  userIconContainer: {
    marginRight: 9,
  },
  userVideoIconContainer: {
    resizeMode: 'contain',
    width: 22,
    height: 22,
    marginLeft: 9,
    alignContent: 'flex-end',
  },
  userContainer: {
    flex: 1,
    marginLeft: 9,
    alignContent: 'flex-end',
  },
  videoIcon: {
    width:22,
    height: 22,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  username: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 1,
  },
  userChatText: {
    fontSize: 12,
    color: '#6D6C6C',
    marginTop: 1,
  },
});
