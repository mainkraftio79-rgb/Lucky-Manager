const fs = require('fs');
fetch('https://en.wikipedia.org/wiki/2025%E2%80%9326_Arsenal_F.C._season').then(r => r.text()).then(t => {
   const tf = t.split('Transfers out')[1].split('Overall transfer activity')[0];
   const p = tf.match(/title="([^"]+)"/g);
   fs.writeFileSync('ars2.txt', p ? p.join('\n') : "no match");
}).catch(console.error);
