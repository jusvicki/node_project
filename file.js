const fs = require('fs');


const filename = 'welcome.txt';
const content = 'Hello Node';


fs.writeFile(filename, content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log(`File "${filename}" has been created with content: "${content}"`);
  }
});



  