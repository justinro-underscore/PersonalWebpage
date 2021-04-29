import styled from 'styled-components';
import {gray0, bluelight, black} from '../styles/palette'

export const AppContainer = styled.div`
  text-align: center;
`;

export const AppHeader = styled.header`
  background-color: ${gray0};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${black};
`;

export const AppLink = styled.a`
  color: ${bluelight};
`;