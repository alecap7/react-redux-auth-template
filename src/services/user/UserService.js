import FakeBackend from "../FakeBackend";


//la responsabilità di un service è solo richiamare il backend.
export default class UserService {

    //l'implementazione tenta di imitare una chiamata axios.
    getUserById(userId, accessToken, onSuccess, onError){

        new FakeBackend()
            .fakeGetUserById(userId, accessToken)
            .then(function(res) {onSuccess(res)}, function(err) {onError(err)});
            
    }

}