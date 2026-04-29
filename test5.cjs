const fs = require('fs');
const html = fs.readFileSync('ars3.html', 'utf8');

const parseSection = (id1, id2) => {
   const tf = html.split(id1)[1].split(id2)[0];
   const names = tf.match(/title="([^"]+)"/g);
   return names ? names.map(n => n.replace('title="', '').replace('"', '')).join('\n') : "no match";
}
console.log("=== TRANSFERS OUT ===");
console.log(parseSection('id="Transfers_out"', 'id="Loans_in"'));

console.log("=== LOANS OUT ===");
console.log(parseSection('id="Loans_out"', 'id="Overall_transfer_activity"'));

console.log("=== RELEASED ===");
console.log(parseSection('id="Released"', 'id="Transfers_in"'));
