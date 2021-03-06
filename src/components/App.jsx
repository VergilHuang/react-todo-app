import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import User from './User.jsx';
import List from './List.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import CommitNote from './CommitNote.jsx';
import ErrorBoundary from '../error-component/ErrorBoundary.jsx';

const App = () => {

  return (
    <ErrorBoundary>
      <Router>
        <div className="app-view">
          <User />
          <Header />
          <CommitNote />  
          <List />
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
