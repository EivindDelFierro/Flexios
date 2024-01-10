import React from 'react';
import Login from '../components/login.jsx';
import Signup from '../components/signup.jsx'


const WelcomeScreen = () => {
    return(
        <div>
            <Login/>
            <Signup/>
        </div>
    )
}

export default WelcomeScreen