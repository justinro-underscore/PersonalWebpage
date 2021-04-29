import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Navigation from './navigation/Navigation';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
      </Switch>
    </BrowserRouter>
  );
}
