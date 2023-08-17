import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {useState} from "react";
import auth from "../../FireBase/Firebase.js";
import {Link as ScrollLink} from "react-scroll";
import {useNavigate} from "react-router-dom";


function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setrepeatPassword] = useState("")
    let history = useNavigate();



    const submitHandler = (e) => {
        e.preventDefault(); // zapobiega automatycznej aktywacji funkcji
        console.log(e, "obiekt eventu");
        if (password === repeatPassword && password.length > 0) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(user => {
                    signInWithEmailAndPassword(auth, email, password)
                        .then(data => history("/"))
                        .catch(error => console.log(error))
                })
                .catch(error => console.log(error));
        } else {
            console.warn("Podane hasło i powtórzone hasło nie są takie same.")
        }

    }

    return (
        <>
            <div className="nav">
                <div className="nav_acc">
                    <a href="" className="nav_acc_log">Zaloguj</a>
                    <a href="" className="nav_acc_create">Załóż konto</a>
                </div>
                <div className="nav_option">
                    <ScrollLink to="counter_sec" smooth={true} duration={500}>
                        <p className="nav_option_button">Start</p>
                    </ScrollLink>
                    <ScrollLink to="steps" smooth={true} duration={500}>
                        <p className="nav_option_button">O co chodzi?</p>
                    </ScrollLink>
                    <ScrollLink to="aboutus" smooth={true} duration={500}>
                        <p className="nav_option_button">O nas</p>
                    </ScrollLink>
                    <ScrollLink to="forwho" smooth={true} duration={500}>
                        <p className="nav_option_button">Fundacja i organizacje</p>
                    </ScrollLink>
                    <ScrollLink to="contact" smooth={true} duration={500}>
                        <p className="nav_option_button">Kontakt</p>
                    </ScrollLink>


                </div>
            </div>
            <div className="register">
                <h1>Załóż konto</h1>
                <div className="buffer"></div>
                    <form onSubmit={(e) => submitHandler(e)}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="password">Hasło</label>
                        <input
                            type="text"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="repeatPassword">Powtórz Hasło</label>
                        <input
                            type="text"
                            name="repeatPassword"
                            id="repeatPassword"
                            value={repeatPassword}
                            onChange={(e) => setrepeatPassword(e.target.value)}
                        />
                        <button>Wyślij</button>
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