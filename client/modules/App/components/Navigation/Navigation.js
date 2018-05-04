import React from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>        
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/">
          <li>Posts</li>
        </Link>
      </div>
    );
  }
}

export default Navigation;