const path = require('path');
const fs = require('fs');
const component = process.argv[2];
const dependency = process.argv[3];

//Function to turn any string to "snake-case"
const toKebabCase = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Convierte camelCase a kebab-case
    .replace(/\s+/g, '-') // Reemplaza espacios en blanco por guiones
    .toLowerCase(); // Convierte todo a minúsculas
};

// Declaring the directory the is going to be executed the search and replace action
const directory = `../src/components/${component}/src`;
const regex = new RegExp(
  `\\.\\.\\/\\.\\.\\/(?:\\.\\.\\/)*(${
    dependency.charAt(0).toUpperCase() + dependency.slice(1)
  })`
);
const newString = `@sipster/react-${toKebabCase(dependency)}`;

// Replacing the matching strings on the found files
const seekAndReplace = (directory, regex, newString) => {
  fs.readdirSync(directory).forEach((file) => {
    const filePath = path.join(directory, file);
    if (fs.statSync(filePath).isDirectory()) {
      seekAndReplace(filePath, regex, newString);
    } else {
      let content = fs.readFileSync(filePath, 'utf8');
      if (content.match(regex)) {
        content = content.replace(regex, newString);
        fs.writeFileSync(filePath, content);
      }
    }
  });
};

seekAndReplace(directory, regex, newString);
