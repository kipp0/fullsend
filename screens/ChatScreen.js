import React from 'react';
import { View, ScrollView, StyleSheet, TextInput,Text } from "react-native";
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

      <View style={styles.container}>
        <FakeTitleBar name={this.props.name} navigation={this.props.navigation} />

        {/* <GiftedChat messages={this.state.messages} /> */}

        <ScrollView>
          <View sytle={styles.chat}>
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

      </View>
    )
  }
}

const offset = 24;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
  },
  
  BackButton: {
    
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