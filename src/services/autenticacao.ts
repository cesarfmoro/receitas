import firebase from 'firebase';

export class AutenticacaoService {
    
    signup(email: string, senha: string) {

        return firebase.auth().createUserWithEmailAndPassword(email, senha);

    }

}