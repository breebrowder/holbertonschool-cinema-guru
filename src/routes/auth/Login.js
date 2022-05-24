import React from 'react';
import "../auth/auth.css";
import Submit from '../../components/general/SubmitButton';
import Input from '../../components/general/Input';

const Login = ({
    username, // The username controlled state
    password, // The password controlled state
    setUsername, // The setState for the username state
    setPassword // The setState for the password state
}) => {
    return (
        <div>
            <h2 className="auth-title">Sign in to your account</h2>

            <Input label="Username" value={username} setValue={setUsername} />
            <Input label="Password" value={password} setValue={setPassword} />

            <Submit label="Sign In" />
        </div>
    );
}

export default Login;