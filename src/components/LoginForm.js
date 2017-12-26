import React from 'react';
import { View, TextInput } from 'react-native';
import { Component } from 'React';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
    state = { text: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput 
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                        style={{ height: 20, width: 100 }} 
                    />
                </CardSection>
                <CardSection>
                    <TextInput style={{ height: 20, width: 100 }} />
                </CardSection>

                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
