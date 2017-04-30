import React from 'react';
import axios from 'axios';

let artistId = '4Z8W4fKeB5YxbusRsdQVPb'

export default class Albums extends React.Component {
  constructor(props) {
        super(props);

        this.state = {
            albums: []
        };
    }
  componentDidMount () {
  axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums`)
    .then((res) => {
      this.setState({
        albums: res.data.items
      })
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
        <div>
          {this.state.albums.map(function (album, id) {
            return (
              <div key={id} className="well col-md-12">
                <img src={album.images[0].url} className="main-image"></img>
                <h3>{album.name}</h3>
                <p>{album.album_type}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
