import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import HomeContainer from './HomeContainer';
import AboutContainer from './AboutContainer';
import GalleryContainer from './GalleryContainer';
import ContactContainer from './ContactContainer';

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={HomeContainer}/>
      <Route path='/about' component={AboutContainer}/>
      <Route path='/gallery' component={GalleryContainer}/>
      <Route path='/contact' component={ContactContainer}/>
    </Router>
  )
}

export default App
