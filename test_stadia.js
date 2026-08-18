const https = require('https');

https.get('https://tiles.stadiamaps.com/tiles/stamen_toner_background/2/2/1.png', (res) => {
  console.log('Stadia Status:', res.statusCode);
  console.log('Stadia Content-Type:', res.headers['content-type']);
}).on('error', (e) => {
  console.error(e);
});
