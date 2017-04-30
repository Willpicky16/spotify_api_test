import React from 'react';
import axios from 'axios';

export default class Search extends React.Component {
  render () {

    let artist = this.state.data;
    return (
      <div>
        <a href="/albums" className="btn btn-primary" role="button">Albums</a>
      </div>
    )
  }
}
