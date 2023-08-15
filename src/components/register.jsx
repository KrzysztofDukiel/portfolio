import {createUserWithEmailAndPassword} from "firebase/auth";
import auth from "../FireBase/Firebase.js";
import {useState} from "react";


function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    createUserWithEmailAndPassword(auth, "test@wp.pl", "Test1234")
        .then(user => console.log(user))
        .catch(error => console.log(error));
    return (
        <>
            <div className="nav">
                <div className="nav_acc">
                    <a href="" className="nav_acc_log">Zaloguj</a>
                    <a href="" className="nav_acc_create">Załóż konto</a>
                </div>
                <div className="nav_option">
                    <a href="#">Start</a>
                    <a href="#">O Co Chodzi</a>
                    <a href="#">O nas</a>
                    <a href="#">Fundacja i organizacje</a>
                    <a href="#">Kontakt</a>

                </div>
            </div>
            <div className="register">
                <h1>Załóż konto</h1>
                <div className="buffer"></div>

                    <form action="">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email"/>
                        <label htmlFor="password">Hasło</label>
                        <input type="text" name="password" id="password"/>
                        <label htmlFor="password">Powtórz Hasło</label>
                        <input type="text" name="password" id="password"/>
                    </form>
                <div className="register_options">
                    <a href="" className="register_options_login">Zaloguj się</a>
                    <a href="" className="register_options_reg">Załóż konto</a>
                </div>
            </div>
        </>
    )
}

export default Register