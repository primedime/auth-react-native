import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/common/Header';
import Card from './src/components/common/Card';
import CardSection from './src/components/common/CardSection';
import Button from './src/components/common/CardSection';

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


