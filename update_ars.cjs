const fs = require('fs');
let content = fs.readFileSync('src/data/leagues.ts', 'utf8');

const removals = [
  'addPlayer("bou", "Kepa Arrizabalaga", "GK", 80, 31);\n',
  'addPlayer("cry", "Eberechi Eze", "MID", 84, 28);\n',
  'addPlayer("bre", "Christian Norgaard", "MID", 80, 32);\n',
  'addPlayer("che", "Noni Madueke", "FWD", 82, 24);\n',
  'addPlayer("lev", "Piero Hincapie", "DEF", 82, 24);\n',
  'addPlayer("val", "Cristhian Mosquera", "DEF", 81, 88, 22);\n',
  'addPlayer("ars", "Takehiro Tomiyasu", "DEF", 81, 82, 27);\n',
  'addPlayer("ars", "Oleksandr Zinchenko", "DEF", 82, 82, 29);\n',
  'addPlayer("ars", "Jakub Kiwior", "DEF", 80, 83, 26);\n',
  'addPlayer("ars", "Ethan Nwaneri", "MID", 77, 88, 19);\n'
];

for (const r of removals) {
  content = content.replace(r, '');
}

const insertPoint = 'addPlayer("ars", "Declan Rice", "MID", 88, 89, 27);\n';
const additions = 
  'addPlayer("ars", "Kepa Arrizabalaga", "GK", 80, 80, 31);\n' +
  'addPlayer("ars", "Cristhian Mosquera", "DEF", 81, 88, 22);\n' +
  'addPlayer("ars", "Piero Hincapie", "DEF", 82, 86, 24);\n' +
  'addPlayer("ars", "Eberechi Eze", "MID", 84, 85, 28);\n' +
  'addPlayer("ars", "Christian Norgaard", "MID", 80, 80, 32);\n' +
  'addPlayer("ars", "Noni Madueke", "FWD", 82, 86, 24);\n';

content = content.replace(insertPoint, insertPoint + additions);

fs.writeFileSync('src/data/leagues.ts', content);
console.log("Updated leagues.ts");
