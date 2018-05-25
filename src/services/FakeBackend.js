import jwt from 'jsonwebtoken';

const USERID = 1, USERNAME = "ale", PASSWORD = "ale";

const USER = {
    ID: USERID,
    username: USERNAME
}

export default class FakeBackend {

    fakeLogin(credentials) {
        
        return new Promise(function(resolve, reject) {
            const { username, password } = credentials;

            if (username === USERNAME && password === PASSWORD) {
                let token = jwt.sign({USERID}, 'digitalgarage');
                resolve({ accessToken: token, user: USER });
            } else {
                reject(Error("Login failed"));
            }
        });

    }

    fakeGetUserById(userId, accessToken){
        
        return new Promise(function(resolve, reject) {

            if (jwt.verify(accessToken, 'digitalgarage')) {
                resolve({ user: USER });
            } else {
                reject(Error("Request Denied"));
            }
        });
    }
} 