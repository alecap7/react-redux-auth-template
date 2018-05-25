import React from 'react';
import FormField from '../../../components/FormField/FormField';
import {login} from '../../../redux/actions/auth/authAction';
import {connect} from 'react-redux';
import AuthService from '../../../services/auth/AuthService';

class LoginForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.authService = new AuthService();
  }

  onSuccess(res){
    sessionStorage.accessToken = res.accessToken;
    this.props.dispatch(login({ user: res.user }));
    this.props.history.push('/profile');
  }

  onError(err){
    this.setState({ error: err.message, isLoading: false });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({isLoading: true});
    this.authService.login(this.state, this.onSuccess.bind(this), this.onError.bind(this));
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { error, username, password, isLoading } = this.state;

    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        
        <h1>Login Form</h1>

        <FormField
          name="username"
          label="Username"
          value={username}
          onChange={this.onChange}
          required="required"
        />

        <FormField
          name="password"
          label="Password"
          value={password}
          onChange={this.onChange}
          type="password"
          required="required"
        />

        <input type="submit" disabled={isLoading} value="Send" />

        { <div>{error}</div> }

      </form>
    );
  }
}

export default connect()(LoginForm);