import { React, useState, useEffect } from 'react';
import "../auth/auth.css";
import axios from 'axios';
import Login from '../auth/Login';
import Register from '../auth/Register';

const Authentication = ({
    setIsLoggedIn, // The setState for the isLoggedin state
    setUserUsername // The setState for the userUsername state
}) => {
    const [_switch, setSwitch] = useState(true);
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");

    const handleSwitch = (value) => {
        setSwitch(value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (_switch) {
            axios.post(process.env.LOGIN, { user, pwd })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("Tok_value", response.data.accessToken)
                    setUserUsername(user)
                    setIsLoggedIn(true)
                }
            })
        } else {
            axios.post(process.env.REGISTER, { user, pwd })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("Tok_value", response.data.accessToken)
                    setUserUsername(user)
                    setIsLoggedIn(true)
                }
            })
        }
    }
    return (
        // Authentication must return a html form in which there’s two Buttons:
        // Sign In: When clicked sets the _switch state to true
        //  Sign Up: When clicked sets the _switch state to false
        <form className="auth" onSubmit={handleSubmit}>
            <header>
                <ul>
                    <li onClick={() => handleSwitch(true)} className={_switch ? 'active' : ''}>Sign In</li>
                    <li onClick={() => handleSwitch(false)} className={!_switch ? 'active' : ''}>Sign Up</li>
                </ul>
            </header>
            <main>
                {_switch ? <Login user={user} pwd={pwd}/> : <Register setPwd={setPwd} setUser={setUser} />}
            </main>
        </form>
    );
}

export default Authentication;
