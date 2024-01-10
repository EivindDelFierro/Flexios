/**
 * ************************************
 *
 * @module  WelcomeScreen.jsx
 * @author Eivind Del Fierro, Morah Geist
 * @date 07/2023
 * @description index file to render app
 *
 * ************************************
 */

import React from 'react';
import ReactDOM from 'react-dom/client'
import LoginScreen from './loginScreen.jsx'
import WelcomeScreen from '../containers/WelcomeScreen.jsx';

// render app from App.jsx file on the html element with id of app in the index.html page
const root = ReactDOM.createRoot(document.getElementById('welcome'));
root.render(
    <WelcomeScreen />
);