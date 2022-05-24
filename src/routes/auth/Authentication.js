import { React, useState } from 'react';
import "../auth/auth.css";
import axios from 'axios';
import Login from '../auth/Login';
import Register from '../auth/Register';

const Authentication = ({
    setIsLoggedIn, // The setState for the isLoggedin state
    setUserUsername // The setState for the userUsername state
}) => {
    const [_switch, setSwitch] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSwitch = (value) => {
        setSwitch(value)
        setPassword("")
        setUsername("")
    }
    const handleForm = (event) => {
        event.preventDefault()
        if (_switch) {
            axios.post(process.env.REACT_APP_API_LOGIN, { username, password })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("accessToken", response.data.accessToken)
                    setUserUsername(username)
                    setIsLoggedIn(true)
                }
            })
        } else {
            axios.post(process.env.REACT_APP_API_REGISTER, { username, password })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("accessToken", response.data.accessToken)
                    setUserUsername(username)
                    setIsLoggedIn(true)
                }
            })
        }
    }
    return (
        <form className="auth" onSubmit={handleForm}>
            <body>
                <ul>
                    <li onClick={() => handleSwitch(true)} className={_switch ? 'active' : ''}>Sign In</li>
                    <li onClick={() => handleSwitch(false)} className={!_switch ? 'active' : ''}>Sign Up</li>
                </ul>
            <main>
                {_switch ? <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} /> : <Register username={username} setUsername={setUsername} password={password} setPassword={setPassword} />}
            </main>
            </body>
         
        </form>
    );
}

export default Authentication;

