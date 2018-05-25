import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import jwt from 'jsonwebtoken';
import {store} from "./store";
import {login} from './redux/actions/auth/authAction';
import UserService from './services/user/UserService';

//per ripopolare lo stato in caso di refresh della pagina
if (sessionStorage.accessToken) {
    let userID = jwt.decode(sessionStorage.accessToken).userID;
    new UserService().getUserById(
        userID, 
        sessionStorage.accessToken,
        res => {store.dispatch(login(res))},
        err => {console.error(err)}
    );
  }

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
