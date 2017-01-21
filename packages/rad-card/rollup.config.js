import babel from 'rollup-plugin-babel';

var dest = 'dist/Card.js';
var destES = 'dist/Card.es.js';
var sourceMap = true;

if (process.env.NODE_ENV === 'production') {
  dest = 'dist/Card.min.js';
  destES = 'dist/Card.min.es.js';
  sourceMap = false;
}

export default {
  entry: 'src/Card.js',
  moduleName: 'RadCard',
  targets: [ { dest: dest, format: 'umd' }, { dest: destES, format: 'es' } ],
  sourceMap,
  plugins: [
    babel({
      babelrc: true,
      externalHelpers: true,
      runtimeHelpers: false,
      exclude: 'node_modules/**',
    }),
  ],
  external: [
    'react'
  ],
  globals: {
    'react': 'React',
  },
}
