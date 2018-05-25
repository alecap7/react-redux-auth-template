import React from 'react';
import LoginForm from './components/LoginForm';

export class LoginPage extends React.Component {

    render() {
        return (
            <div>
                <LoginForm history={this.props.history}/>
            </div>
        );
    }
}


export default LoginPage;