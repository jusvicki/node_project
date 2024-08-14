const fs = require('fs');

fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      console.log(data);
    }
  });