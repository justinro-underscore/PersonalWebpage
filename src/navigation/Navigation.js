import React from 'react';
import {useLocation, Link} from 'react-router-dom';

import {NavBar, NavCell} from './Navigation.styled';

const NavLink = ({initPath, path, text}) => (
  <Link to={`/${path}`}>
    <NavCell active={initPath === path}>{text}</NavCell>
  </Link>
);

export default function Navigation() {
  const {pathname} = useLocation();
  const initPath = pathname.match(/^\/([a-z]*)/)[1];

  return (
    <NavBar>
      <NavLink initPath={initPath} path='' text='Home' />
      <NavLink initPath={initPath} path='projects' text='Projects' />
    </NavBar>
  );
}
