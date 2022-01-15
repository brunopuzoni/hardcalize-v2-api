module.exports = {
  // Type check TypeScript files
  '**/*.(ts)': () => 'yarn tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|js)': (filenames) => [`yarn lint --fix ${filenames.join(' ')}`],
}
