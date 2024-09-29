module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'yarn compile',

  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx|js)': filenames => [
    `yarn lint:fix ${filenames.join(' ')}`,
    `yarn format ${filenames.join(' ')}`,
    `yarn build`
  ],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': filenames => `yarn format ${filenames.join(' ')}`
};
