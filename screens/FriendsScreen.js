import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import FakeTitleBar from '../components/FakeTitleBar';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class FriendsScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Friends',
  };
  state = {
    value: '',
  }
  onChangeText = text => this.setState({ value })
  render() {

    return (
      <View style={styles.container}>
        <FakeTitleBar name='Friends' navigation={this.props.navigation} />

        <ScrollView>
          <View style={styles.input}>
            <Ionicons name="ios-search" size={22} color="#ccc" />
            <TextInput
            style={styles.textInput}
            placeHolder='Say Something..'
            defaultValue={String(this.state.value)}
            onChangeText={this.onChangeText} />
          </View>
          <View>
            <Text style={styles.messagesTitleText}>Added You</Text>

            <Touchable
              style={styles.option}
              background={Touchable.Ripple('#ccc', false)}
              onPress={this._handlePressForums}>
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
                <View style={styles.add}>
                  <Text style={styles.addText}>Add</Text>
                </View>
              </View>
            </Touchable>

            <Text style={styles.messagesTitleText}>Friends</Text>
            <Touchable
              style={styles.option}
              background={Touchable.Ripple('#ccc', false)}
              onPress={this._handlePressForums}>
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
            </Touchable>


            <Touchable
              style={styles.option}
              background={Touchable.Ripple('#ccc', false)}
              onPress={this._handlePressForums}>
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
            </Touchable>

            <Touchable
              style={styles.option}
              background={Touchable.Ripple('#ccc', false)}
              onPress={this._handlePressForums}>
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
            </Touchable>



          </View>

        </ScrollView>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  input: {
    flexDirection: 'row',
    marginTop: 50,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
  },
  userIconContainer: {
    marginRight: 9,
  },
  videoIcon: {
    width: 22,
    height: 22,
  },
  add: {
    backgroundColor: '#E7E7E7',
    padding: 15,
    borderRadius: 15,
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

    marginLeft: 9,
    alignContent: 'flex-end',
  },
  userContainer: {
    flex: 1,
    marginLeft: 9,
    alignContent: 'flex-end',
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
