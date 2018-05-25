import FakeBackend from "../FakeBackend";


//la responsabilità di un service è solo richiamare il backend.
export default class AuthService {

    //l'implementazione tenta di imitare una chiamata axios.
    login(credentials, onSuccess, onError){

        new FakeBackend()
            .fakeLogin(credentials)
            .then(function(res) {onSuccess(res)}, function(err) {onError(err)});
            
    }

}
