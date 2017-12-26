import React from 'react';
import { Component } from 'React';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { text: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                    />
                </CardSection>
                <CardSection>
                    <Input style={{ height: 20, width: 100 }} />
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
