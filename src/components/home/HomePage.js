import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>My Title</h1>
        <p>My Description</p>
        <Link to="about" className="btn btn-primary btn-lg">
          About
        </Link>
      </div>
    );
  }
}

export default HomePage;
