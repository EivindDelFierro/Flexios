const server = 'http://localhost:3000';
const request = require('supertest');
const fs = require('fs');
import React from 'react';
import App from '../Client/App.jsx';
import { Store } from '../Client/store.js';
import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';


describe('test for menuContainer.jsx', () => {
  // beforeAll(() => {
  //   const renderedMenuContainer = render(<menuContainer/>);
  // })
  it('menuContainer.js renders on the page', () => {
    const tree = renderer
      .create(<menuContainer/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});