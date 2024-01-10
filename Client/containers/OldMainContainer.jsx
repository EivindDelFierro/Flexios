import React from 'react';
import Stretch from '../components/Stretch.jsx';

const MainContainer = () => {
  // stretchesFromAPI is an array that holds a series of objects, where each object is a stretch we have pulled from our query to our server
  let stretchesFromAPI = [{}, {}, {}];
  // stretchFetch is an async func that accepts as a param a muscle from user input in search bar
  const stretchFetch = async (muscle) => {
    try {
      // fetch request to server 3000
      const response = await fetch(
        `/api?muscle=${muscle}&type=stretching`
      );
      stretchesFromAPI = await response.json();
      redirect('/');
      return;
    } catch (err) {
      console.log('Error from stretchFetch in MainContainer.jsx');
    }
  };

  // init stretchComponents as empty arr, this will store Stretch components before rendering
  const stretchComponents = [];
  // if stretchesFromAPI is not undefined/null, iterate through stretchesFromAPI and push a new TaskRow component with id and key properties
  if (stretchesFromAPI) {
    stretchesFromAPI.forEach((task) => {
      stretchComponents.push(
        <Stretch
          name={'Stretch1'}
          equipment={'insert equipment from API query here'}
          difficulty={'insert difficulty from API query here'}
          instructions={'insert instructions from API query here'}
        ></Stretch>
      );
    });
  }
  // insert any logic for the MainContainer here, including (potentially):
  return (
    <div>
      {/* this p tag just helps us see where this MainContainer is being rendered */}
      <p>This is the MainContainer in Client/containers/MainContainer.jsx</p>
      {/* insert search bar here (input textbox and submit button) */}
      <form action="">
      <label name='searchBar'>
        Search:
        <input id='searchQ' />
      </label>

      submit

      </form>


      {/* Stretch are individual search results from query to database/API */}
      {stretchComponents}
    </div>
  );
};
// export default MainContainer;
