/**
 * ************************************
 *
 * @module Header
 * @author Eivind Del Fierro, Morah Geist
 * @date 07/2023
 * @description header feature on main page of app
 *
 * ************************************
 */

import React from 'react';
import * as actions from '../actionCreator/actionCreator.js';

const HeaderContainer = () => {
  return (
    <div className="appHeaderBox">
      <h4 className="mainHeader">Stretch</h4>
      <button className="logoutBtn">Logout</button>
    </div>
  );
};

export default HeaderContainer;
