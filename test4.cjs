const fs = require('fs');
fetch('https://en.wikipedia.org/wiki/2025%E2%80%9326_Arsenal_F.C._season').then(r => r.text()).then(t => {
   const tfOut = t.split('Transfers out')[1].split('Loans in')[0];
   console.log(tfOut.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
   
   const loansOut = t.split('Loans out')[1].split('Overall transfer activity')[0];
   console.log(loansOut.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}).catch(console.error);
