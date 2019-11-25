import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import FindFriendsScreen from '../screens/FindFriendsScreen';
import ChatScreen from '../screens/ChatScreen';
import MessagesScreen from '../screens/MessagesScreen';
import CallScreen from '../screens/CallScreen';
// import AddingFriendScreen from '../screens/AddingFriendScreen';

export default createAppContainer(
  createSwitchNavigator({
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Main: MainTabNavigator,
    FindFriends: { screen: FindFriendsScreen },
      Chat: { screen: ChatScreen },
      Messages: {screen: MessagesScreen},
      Call: {screen: CallScreen},
      // AddingFriend: { screen: AddingFriendScreen},
    },
    {
      initialRouteName: 'Main',
    }
  )
);
