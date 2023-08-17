import {createUserWithEmailAndPassword} from "firebase/auth";
import auth from "../FireBase/Firebase.js";


function Login() {
    createUserWithEmailAndPassword(auth, "test@wp.pl", "Test1234")
        .then(user => console.log(user))
        .catch(error => console.log(error));
    return (
        <>

        </>
    )
}

export default Login
