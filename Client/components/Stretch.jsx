/**
 * ************************************
 *
 * @module  Stretch
 * @author Eivind Del Fierro, Morah Geist
 * @date 07/2023
 * @description stretch box
 *
 * ************************************
 */

import React from 'react';
import { Link } from 'react-router-dom';
import LabeledText from './LabeledText.jsx';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regStar } from '@fortawesome/free-regular-svg-icons';

const Stretch = (props) => {
  props = props.exercises;
  // insert any logic for the Stretch here
  let FavIcon;

  // if (fav)
  //   FavIcon = (
  //     <span className="favIcon">
  //       <FAIcon
  //         onClick={() => props.favClicked(id)}
  //         icon={solidStar}
  //         style={{ color: '#ff7300' }}
  //       />
  //     </span>
  //   );
  // else
  //   FavIcon = (
  // <span className="favIcon">
  //   <FAIcon onClick={() => props.favClicked(id)} icon={regStar} />
  // </span>;
  //   );

  // return stretch component with passed-in props from query to server
  return (
    <div className="stretchCard">
      <div className="cardHeadBox">
        <h3 className="cardHeader">{props.name}</h3>
        {/* need logic to make Fav Icon then comment this back in and delete other */}
        <span className="favIcon">
          <FAIcon onClick={() => props.favClicked(id)} icon={regStar} />
        </span>
      </div>
      <ul>
        <li>
          <LabeledText label="Equipment" text={props.equipment} />
        </li>
        <li>
          <LabeledText label="Difficulty" text={props.difficulty} />
        </li>
        <li>
          <LabeledText label="Instructions" text={props.instructions} />
        </li>
      </ul>
    </div>
  );
};
export default Stretch;
