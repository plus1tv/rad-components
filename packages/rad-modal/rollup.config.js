import babel from 'rollup-plugin-babel';

var dest = 'dist/Modal.js';
var destES = 'dist/Modal.es.js';
var sourceMap = true;

if (process.env.NODE_ENV === 'production') {
  dest = 'dist/Modal.min.js';
  destES = 'dist/Modal.min.es.js';
  sourceMap = false;
}

export default {
  entry: 'src/Modal.js',
  moduleName: 'RadModal',
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
