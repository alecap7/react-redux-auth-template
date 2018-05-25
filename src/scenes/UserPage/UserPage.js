import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth/authAction';

class UserPage extends React.Component {

    logout(){
        sessionStorage.removeItem("accessToken");
        this.props.dispatch(logout({}));
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                <h1>Username:{this.props.user.username}</h1>
                <button onClick={this.logout.bind(this)}>logout</button>
            </div>
        )
    }
}

export default connect(state => {return {user: state.authReducer.user}})(UserPage);