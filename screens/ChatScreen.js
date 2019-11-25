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
        isYou: false,
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
    this.state.messages.push({ key, value, isYou: true })
    messages = this.state.messages
    console.log(messages)
    this.setState({ messages })
  }

  render() {

    return (

      <KeyboardAvoidingView behavior='padding' style={styles.container} enabled>
        <FakeTitleBar name={this.props.name} navigation={this.props.navigation} />

        {/* <GiftedChat messages={this.state.messages} /> */}

        <ScrollView style={styles.scrollView}>
          <View style={styles.msgView}>
            {
              this.state.messages.map( ( {key, value, isYou} ) => <ChatBubble key={key} text={value} isYou={isYou} /> )
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
    marginTop: 50,
  },
  bubble: {
    alignSelf: 'flex-end',
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