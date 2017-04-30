import React from 'react';

import NavBar from './NavBar';
import FrontPage from './FrontPage';

class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <br/><br/>
        <div className="container">
          <FrontPage />
        </div>
      </div>
    )
  }
}

export default App;
