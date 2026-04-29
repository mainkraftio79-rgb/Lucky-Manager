const fs = require('fs');
fetch('https://en.wikipedia.org/wiki/2025%E2%80%9326_Arsenal_F.C._season').then(r => r.text()).then(t => {
   const tf = t.split('id="First_team_squad"')[1].split('id="Academy"')[0];
   const p = tf.match(/title="([^"]+)"/g);
   fs.writeFileSync('ars.txt', p.join('\n'));
});
