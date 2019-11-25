import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Touchable from 'react-native-platform-touchable';

export default class RecentCallScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.messagesTitleText}>Today</Text>
  
            <TouchableOpacity
              style={styles.option}
              background={Touchable.Ripple('#ccc', false)}
              onPress={() => navigate('Call', { name: 'Dale' })}>
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
                  <Text style={styles.userChatText}>10:13 am</Text>
                </View>
              </View>
            </TouchableOpacity>
  
  
  
  
  
            <Text style={styles.messagesTitleText}>Yesterday</Text>
  
            <TouchableOpacity
              style={styles.option}
              background={Touchable.Ripple('#ccc', false)}
              onPress={() => navigate('Call', { name: 'Jose' })}>
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
                  <Text style={styles.userChatText}>11:13 pm</Text>
                </View>
              </View>
            </TouchableOpacity>
  
            <TouchableOpacity
              style={styles.option}
              background={Touchable.Ripple('#ccc', false)}
              onPress={() => navigate('Call', { name: 'Armondo' })}>
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
                  <Text style={styles.userChatText}>10:13 pm</Text>
                </View>
              </View>
            </TouchableOpacity>
  
            <Touchable
              style={styles.option}
              background={Touchable.Ripple('#ccc', false)}
              onPress={() => navigate('Call', { name: 'Jesus' })}>
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
                  <Text style={styles.userChatText}>10:13 am</Text>
                </View>
              </View>
            </Touchable>
  
  
  
          </View>
  
        </ScrollView>
      </View>
    );
  }
}

RecentCallScreen.navigationOptions = {
  title: 'Recent Calls',
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
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
    width: 22,
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