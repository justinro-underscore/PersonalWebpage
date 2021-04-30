import styled from 'styled-components';
import {gray1, gray2, gray3, gray4, black} from '../styles/palette';

export const NavBar = styled.div`
  background-color: ${gray1};
  box-shadow: 0 3px 10px ${gray4};
  display: flex;
  justify-content: center;
`;

export const NavCell = styled.div`
  padding: 15px;
  display: block;
  color: ${black};
  transition-duration: 0.3s;

  :hover {
    background-color: ${gray3};
  }

  ${({active}) => active && `
    background-color: ${gray2}
  `}
`;
