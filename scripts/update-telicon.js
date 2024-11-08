const { spawn } = require('child_process');

/**
 * Updating Telicon process
 * 1. Run "telicon:jsx" to convert .svg to jsx
 *  1.1. This command runs "svgr" internally
 * 2. Get the response in stdout, then extract symbols defs and split them into an array
 * 3. Generate object
 *
 * list = {
 *    'icon': <symbol><path .../></symbol>
 * }
 */

// Running svgr command to generate jsx
// const proc = spawn('yarn', ['telicon:jsx:generate']);
const proc = spawn('npx', [
  'svgr',
  '--config-file',
  './svgrrc.config.js',
  '--template',
  './templates/telicon-svgr.js',
  'node_modules/@sipster/telicon/telicon.svg',
]);

// Since telicon.svg is a very large file, it will be loaded in chunks
const list = [];
proc.stdout.on('data', (chunk) => {
  list.push(chunk);
});

// After all chunks are loaded, we generate icons list
proc.stdout.on('end', () => {
  const code = `${list.join()}`;
  // Get all symbols from first occurrence until </svg> tag close
  const symbols = code.substring(
    code.indexOf('<symbol'),
    code.indexOf('</svg>')
  );
  const symbolList = symbols
    .split('</symbol>')
    .reduce((allIcons, currentSymbol) => {
      if (currentSymbol.indexOf('<symbol') !== -1) {
        // Getting id="" attribute from symbol
        const [, symbolId] = currentSymbol.match(/id="([^"]+)"/);
        // 'icon': <symbol><path .../></symbol>
        return `${allIcons}'${symbolId}': ${currentSymbol}
</symbol>,`;
      }
      return allIcons;
    }, '');

  const iconList = `import React from 'react';

interface IconListType {
  [key: string]: React.ReactElement;
}

export const iconList: IconListType = {
${symbolList}
}`;

  // Output result
  console.log(iconList);
});

// proc.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`);
// });

proc.on('error', (error) => {
  console.error(`error: ${error.message}`);
});

// proc.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });
