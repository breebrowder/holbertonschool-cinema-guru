import React from 'react';
import '../navigation/navigation.css';


const Header = ({
    userUsername, // The state for the username
    setIsLoggedIn // The setState for the isLoggedin state
}) => {

    // Create logout function in which:
    // Remove the accessToken item from localStorage
    // Set isLoggedIn state to false
    const logout = () => {
        localStorage.removeItem('accessToken')
        setIsLoggedIn(false)
    }
    return (
        <nav className="nav">
            <h1>Cinema Guru</h1>
            <span>
                <img src="https://picsum.photos/100/100" />
                <p>Welcome, {userUsername}!</p>
                <span onClick={logout}>
                    <p>Logout</p>
                </span>

            </span>
        </nav>
    );
}

export default Header;

