import React from 'react';
import {Link} from 'react-router-dom';

import {Container} from './Navigation.styled';

export default function Navigation() {
  return (
    <Container>
      <Link to='/'>Home</Link>
      <Link to='/projects'>Projects</Link>
    </Container>
  );
}
