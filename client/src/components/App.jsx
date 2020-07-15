import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Form from './Form';
import NavBar from './NavBar';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: white;
    font-family: Arial, Helvetica, sans-serif;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
  }

  button {
    background: none;
    outline:  none;
    border: none;
  }
`;

export default () => {

  return (
    <div style={{margin: 'auto'}}>
      <GlobalStyle />
      <NavBar />
      <Form />
    </div>
  );
};