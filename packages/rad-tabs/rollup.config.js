import babel from 'rollup-plugin-babel';

var dest = 'dist/Tabs.js';
var destES = 'dist/Tabs.es.js';
var sourceMap = true;

if (process.env.NODE_ENV === 'production') {
  dest = 'dist/Tabs.min.js';
  destES = 'dist/Tabs.min.es.js';
  sourceMap = false;
}

export default {
  entry: 'src/Tabs.js',
  moduleName: 'RadTabs',
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
