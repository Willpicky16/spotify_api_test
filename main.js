const axios = require('axios');

axios.get('https://api.spotify.com/v1/artists/48vDIufGC8ujPuBiTxY8dm')
  .then((res) => {
    console.log(res.data);
})
.catch((err) => {
console.log(err);
});
