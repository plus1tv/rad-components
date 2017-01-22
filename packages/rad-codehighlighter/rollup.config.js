import babel from 'rollup-plugin-babel';

var dest = 'dist/Codehighlighter.js';
var destES = 'dist/Codehighlighter.es.js';
var sourceMap = true;

if (process.env.NODE_ENV === 'production') {
  dest = 'dist/Codehighlighter.min.js';
  destES = 'dist/Codehighlighter.min.es.js';
  sourceMap = false;
}

export default {
  entry: 'src/Codehighlighter.js',
  moduleName: 'RadCodehighlighter',
  targets: [ { dest: dest, format: 'umd' }, { dest: destES, format: 'es' } ],
  sourceMap,
  plugins: [
    babel({
      babelrc: true,
      externalHelpers: false,
      runtimeHelpers: false,
      exclude: 'node_modules/**',
    }),
  ],
  external: [
    'react',
    'prismjs'
  ],
  globals: {
    'react': 'React',
    'prismjs': 'prismjs'
  },
}
