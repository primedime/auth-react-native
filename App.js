import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { Header, CardSection, Card } from './src/components/common';

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp(
      {
        apiKey: "AIzaSyC48R1dleUeBNeOUzeaS6xSaAqlJmKkEIg",
        authDomain: "authentication-77b55.firebaseapp.com",
        databaseURL: "https://authentication-77b55.firebaseio.com",
        projectId: "authentication-77b55",
        storageBucket: "authentication-77b55.appspot.com",
        messagingSenderId: "630339031581"
      });
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
          <CardSection>
            <Card />
          </CardSection>
        
      </View>
    );
  }
}


