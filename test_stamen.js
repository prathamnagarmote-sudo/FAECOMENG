const https = require('https');

https.get('https://stamen-tiles.a.ssl.fastly.net/toner-background/2/2/1.png', (res) => {
  console.log('Status:', res.statusCode);
  console.log('Headers:', res.headers['content-type']);
}).on('error', (e) => {
  console.error(e);
});
