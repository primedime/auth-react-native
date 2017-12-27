import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  state = { loggedIn: null };

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

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
      });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }


  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
          {this.renderContent()}   
      </View>
    );
  }
}


