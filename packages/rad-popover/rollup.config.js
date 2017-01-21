import babel from 'rollup-plugin-babel';

var dest = 'dist/Popover.js';
var destES = 'dist/Popover.es.js';
var sourceMap = true;

if (process.env.NODE_ENV === 'production') {
  dest = 'dist/Popover.min.js';
  destES = 'dist/Popover.min.es.js';
  sourceMap = false;
}

export default {
  entry: 'src/Popover.js',
  moduleName: 'RadPopover',
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
