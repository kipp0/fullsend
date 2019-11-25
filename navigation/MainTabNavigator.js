import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import RecentCallScreen from '../screens/RecentCallScreen';
import MessagesScreen from '../screens/MessagesScreen';
import AccountScreen from '../screens/AccountScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const RecentCallStack = createStackNavigator(
  {
    RecentCalls: RecentCallScreen,
  },
  config
);

RecentCallStack.navigationOptions = {
  tabBarLabel: 'Recents',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-clock`
          : 'md-information-circle'
      }
    />
  ),
};

RecentCallStack.path = '';

const MessagesStack = createStackNavigator(
  {
    Messages: MessagesScreen,
  },
  config
);

MessagesStack.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-chatboxes' : 'md-link'} />
  ),
};

MessagesStack.path = '';

const AccountStack = createStackNavigator(
  {
    Account: AccountScreen,
  },
  config
);

AccountStack.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

AccountStack.path = '';

const tabNavigator = createBottomTabNavigator({
  RecentCallStack,
  MessagesStack,
  AccountStack,
});

tabNavigator.path = '';

export default tabNavigator;
