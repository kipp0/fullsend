import React from 'react';
import { View, ScrollView, StyleSheet, TextInput, Text, KeyboardAvoidingView } from "react-native";
import ChatBubble from "../components/ChatBubble";
import { TouchableOpacity } from 'react-native-gesture-handler';
import FakeTitleBar from '../components/FakeTitleBar';
import { GiftedChat } from 'react-native-gifted-chat';

export default class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat',
  }

  state = {
    value: '',
    messages: [
      {
        key: 0,
        text: 'hello',
      }
    ],
  }
  constructor() {
    super()
    // this.navigationOptions = this.props.name
  }

  onChangeText = value => this.setState({ value })

  onEnter = value => {
    let key = this.state.messages.length
    value = value.nativeEvent.text
    this.state.messages.push({ key, value })
    messages = this.state.messages

    this.setState({ messages })
  }

  render() {

    return (

      <KeyboardAvoidingView behavior='padding' style={styles.container} enabled>
        <FakeTitleBar name={this.props.name} navigation={this.props.navigation} />

        {/* <GiftedChat messages={this.state.messages} /> */}

        <ScrollView sytle={styles.scrollView}>
          <View>
            {
              this.state.messages.map( ( {key, text} ) => <ChatBubble key={key} text={text} /> )
            }
          </View>
          {/* <Text>{this.state.value}</Text> */}
        </ScrollView>

        <TextInput 
          style={styles.input}
          placeHolder='Say Something..'
          defaultValue={String(this.state.value)}
          onChangeText={this.onChangeText}
          onBlur={this.onEnter}
        />

      </KeyboardAvoidingView>
    )
  }
}

const offset = 24;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  
  scrollView: {
    backgroundColor: '#000',
    marginTop: 130,
    paddingTop: 15,
  },

  input: { 
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
    borderRadius: 50,
  },
})
// watch the roomt