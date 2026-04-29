const fs = require('fs');
fetch('https://en.wikipedia.org/wiki/2025%E2%80%9326_Arsenal_F.C._season').then(r => r.text()).then(t => {
   fs.writeFileSync('ars3.html', t);
}).catch(console.error);
