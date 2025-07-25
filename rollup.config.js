export default {
  input: 'src/main.js', // your entry file
  output: {
    dir: 'dist',
    format: 'esm',
  },
  external: [
    'ox',
    '@reown/appkit',
    '@reown/appkit-controllers',
    // Add more if necessary
  ],
  plugins: [
    // your plugins here
  ]
};
