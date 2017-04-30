import React from 'react';
import axios from 'axios';

let artistId = '4Z8W4fKeB5YxbusRsdQVPb'

export default class Artists extends React.Component {
  constructor(props) {
        super(props);

        this.state = {
            data: {},
            followers: '',
            image: ''
        };
    }
  componentDidMount () {
    axios.get(`https://api.spotify.com/v1/artists/${artistId}`)
      .then((res) => {
    this.setState(
      {
        data: res.data,
        followers: res.data.followers.total,
        image: res.data.images[0].url
      }
    )
  })
  .catch((err) => {
    console.log(err);
  });
  }
  render () {

    let artist = this.state.data;
    return (
      <div className="row col-md-12">
        <br></br>
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src={this.state.image} alt={artist.name}></img>
            <div className="caption">
              <h3>{artist.name}</h3>
              <p><b>Type:</b> {artist.type}</p>
              <p><b>Popularity:</b> {artist.popularity}</p>
              <p><b>Followers:</b> {this.state.followers}</p>
              <p><b>Genres:</b> {artist.genres}</p>
              <p><a href="/albums" className="btn btn-primary" role="button">Albums</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
