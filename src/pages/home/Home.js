import React from 'react';
import {HomeContainer, HomeHeader, HomeLink} from './Home.styled';

export default function Home() {
  return (
    <HomeContainer>
      <HomeHeader>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HomeLink href="https://reactjs.org" target="_blank">
          Learn React
        </HomeLink>
      </HomeHeader>
    </HomeContainer>
  );
}
