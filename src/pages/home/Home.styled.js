import styled from 'styled-components';
import {bluelight, black} from '../../styles/palette';

export const HomeContainer = styled.div`
  text-align: center;
`;

export const HomeHeader = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${black};
`;

export const HomeLink = styled.a`
  color: ${bluelight};
`;