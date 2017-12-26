import React from 'react';
import { View } from 'react-native';
import { Component } from 'React';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection />
                <CardSection />

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
