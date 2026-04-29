const https = require('https');
const fs = require('fs');

const teamMap = {
  'Real Madrid': 'rma',
  'Barcelona': 'bar',
  'Atlético Madrid': 'atm',
  'Sevilla': 'sev',
  'Valencia': 'val',
  'Real Sociedad': 'rso',
  'Real Betis': 'bet',
  'Athletic Bilbao': 'ath',
  'Villarreal': 'vil',
  'Girona': 'gir',
  'Celta Vigo': 'cel',
  'Osasuna': 'osa',
  'Getafe': 'get',
  'Mallorca': 'mal',
  'Rayo Vallecano': 'ray',
  'Alavés': 'ala',
  'Las Palmas': 'pal',
  'Leganés': 'leg',
  'Valladolid': 'val2',
  'Espanyol': 'esp',
};

const options = {
  hostname: 'en.wikipedia.org',
  path: '/wiki/List_of_Spanish_football_transfers_summer_2025',
  headers: { 'User-Agent': 'Mozilla/5.0' }
};

https.get(options, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Parse the text
    const text = data.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');

    const laligaMatch = text.match(/La Liga \[ edit \](.*?) Segunda División \[ edit \]/);
    if (!laligaMatch) {
      console.log('Failed to extract La Liga section');
      return;
    }

    const laligaText = laligaMatch[1];
    const teamSections = laligaText.split(/([A-Z][a-zA-Záéíóúüñ ]+) \[ edit \]/).slice(1);
    
    let toAdd = [];
    let toRemove = [];

    for (let i = 0; i < teamSections.length; i += 2) {
      const teamName = teamSections[i].trim();
      const sectionText = teamSections[i + 1];
      const code = teamMap[teamName];
      if (!code) continue;

      const inMatch = sectionText.split('Out:')[0];
      const outMatch = sectionText.split('Out:')[1];

      if (inMatch) {
        // extract players
        // format: DF ESP Jonny Otto (from...
        const players = inMatch.matchAll(/(GK|DF|MF|FW)\s+[A-Z]{3}\s+([A-Za-z \-áéíóúüñ]+?)\s+\(/g);
        for (const p of players) {
          const pos = p[1];
          const name = p[2].trim();
          toAdd.push({ code, name, pos });
        }
      }
      if (outMatch) {
        const players = outMatch.matchAll(/(GK|DF|MF|FW)\s+[A-Z]{3}\s+([A-Za-z \-áéíóúüñ]+?)\s+\(/g);
        for (const p of players) {
          const pos = p[1];
          const name = p[2].trim();
          toRemove.push({ code, name, pos });
        }
      }
    }

    console.log(`Found ${toAdd.length} players to add and ${toRemove.length} to remove.`);

    let fileContent = fs.readFileSync('src/data/leagues.ts', 'utf8');
    
    for (const p of toAdd) {
      const line = `addPlayer('${p.code}', '${p.name}', '${p.pos}', ${Math.floor(Math.random() * 6 + 75)}, ${Math.floor(Math.random() * 10 + 20)});`;
      if (!fileContent.includes(line)) {
         fileContent += '\n' + line;
      }
    }

    const lines = fileContent.split('\n');
    const newLines = lines.map(line => {
      for (const p of toRemove) {
        if (line.includes(`'${p.name}'`) && line.includes(`'${p.code}'`) && !line.startsWith('//')) {
          return '// transferred out: ' + line;
        }
      }
      return line;
    });

    fs.writeFileSync('src/data/leagues.ts', newLines.join('\n'));
    console.log('Successfully updated leagues.ts!');
  });
}).on('error', e => console.error(e));
