import { React, useState, useEffect } from 'react';
import "./App.css";
import axios from "axios";
import Authentication from "./routes/auth/Authentication";
import Dashboard from "./routes/dashboard/Dashboard";

function App() {
    // Add the following state to the component using the useState hook:
    // isLoggedInBoolean default: false
    // userUsernamestring default: ""

    const [IsLoggedIn, setIsLoggedIn] = useState(false);
    const [userUsername, setUserUsername] = useState("");


    // use the useEffect hook to do the following whenever the component mounts:
    // Get the value of accessToken item from the localStorage
    // Send a post request to /api/auth/ with the authorization header set to Bearer <accessToken>
    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken")
        axios.post(process.env.AUTH, {}, {
            headers: { authorization: `Bearer ${accessToken}` }

    // onSuccess set the isLoggedin and the userUsername state to true and the username from the response object respectively
        }).then(response => {
            setIsLoggedIn(true)
            userUsername(true)
            setUserUsername(response.data.username)
        })
    }, []);
    return (
        <div className="App">
        {IsLoggedIn ? <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} /> : ( <Authentication IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} /> )}
    </div>
    );
}

export default App;
