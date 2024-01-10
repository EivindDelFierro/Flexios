/**
 * ************************************
 *
 * @module  stretchReducer
 * @author Eivind Del Fierro, Morah Geist
 * @date 07/2023
 * @description reducer for stretch
 *
 * ************************************
 */
import * as types from '../constant/actionTypes.js';

const initialState = {
  exercisesFromAPI: [],
  loggedInUser: '',
  favorites: [],
  muscle: '',
  difficulty: ''
};

const stretchReducer = (state = initialState, action) => {
  switch (action.type) {
    // Get's a list of exercises from the server and updates the array with objects of exercises
    case types.UPDATE_FROM_API: {
      return {...state, exercisesFromAPI : action.payload};
    }

    // Logs user on
    case types.USER_LOG_ON: {
      // get authentication status of user
      return {...state, loggedInUser: action.payload.username, favorites : action.payload.favorites}

    }

    // Logs user off
    case types.USER_LOG_OFF: {
      return {...state, loggedInUser : ''}
    }

    case types.UPDATE_MUSCLE_DIFFICULTY: {
      const [muscle, difficulty] = action.payload;
      return {...state, muscle:muscle, difficulty,difficulty}
    }
    default:
      return state;
  }
};

export default stretchReducer;
