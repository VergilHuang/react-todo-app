import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserContainer from '../containers/User-container.js';
import List from './List.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import CommitNote from './CommitNote.jsx';

const App = () => {

  return (
    <Router>
      <div className="app-view">
        <UserContainer></UserContainer>
        <Header></Header>
        <CommitNote />  
        <List/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;