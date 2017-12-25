import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, CardSection, Card } from './src/components/common';

export default class App extends React.Component {
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


