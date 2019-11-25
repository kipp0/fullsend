import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      
      <Image
        source={
          require('../assets/images/logo.png')
        }
        style={styles.logo}
      />
    </View>
  );
}

AccountScreen.navigationOptions = {
  title: 'Account',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
