import babel from 'rollup-plugin-babel';

var dest = 'dist/Stepper.js';
var destES = 'dist/Stepper.es.js';
var sourceMap = true;

if (process.env.NODE_ENV === 'production') {
  dest = 'dist/Stepper.min.js';
  destES = 'dist/Stepper.min.es.js';
  sourceMap = false;
}

export default {
  entry: 'src/Stepper.js',
  moduleName: 'RadStepper',
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
    'react'
  ],
  globals: {
    'react': 'React',
  },
}
