const fs = require('fs');


// Transliterate
const TRANSLIT = JSON.parse(fs.readFileSync('transliteration.json', 'utf8'));

const MATCHES = Object.keys(TRANSLIT).sort((a, b) => b.length - a.length); // Longest matches first

const IDENTITY = false;
const MAX_LEN = 30;

function translit(line) {
  for (const m of MATCHES) {
    const replacement = TRANSLIT[m][0]; // TODO: don't just take the first one
    line = replaceAll(line, m, replacement);
  }
  return line;
}

function replaceAll(str, substr, newSubstr) {
  return str.split(substr).join(newSubstr);
}

// Read in the raw data file line by line

const data_file = process.argv[2];

const readline = require('readline');

var lineReader = readline.createInterface({
  input: fs.createReadStream(data_file)
});

// Write out the formatted data file line by line

function split(line, n) {
  const range = [...Array(Math.ceil(line.length / n)).keys()];
  return range.map(i => line.slice(i*n, (i+1)*n))
}

lineReader.on('line', function (line) {
  if (line.trim()) {
    line = line.replace('\t', '    ');
    for (const segment of split(line, MAX_LEN)) {
      const translit_segment = translit(segment);
      if (translit_segment != segment) {
        //console.log(translit_segment + '\t' + segment);
        //console.log(translit_segment);// + '\t' + segment);
        console.log(segment);// + '\t' + segment);
      }
    }
  }
});
