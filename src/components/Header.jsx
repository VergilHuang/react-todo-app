import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <ul className="router-list">
      <li><Link to="/">Undone</Link></li>
      <li><Link to="/finished">Complited</Link></li>
      <li><Link to="/deleted">Deleted</Link></li>
    </ul>
  );
};


export default Header;
