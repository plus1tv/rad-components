import babel from 'rollup-plugin-babel';

var dest = 'dist/Navbar.js';
var destES = 'dist/Navbar.es.js';
var sourceMap = true;

if (process.env.NODE_ENV === 'production') {
  dest = 'dist/Navbar.min.js';
  destES = 'dist/Navbar.min.es.js';
  sourceMap = false;
}

export default {
  entry: 'src/Navbar.js',
  moduleName: 'RadNavbar',
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
