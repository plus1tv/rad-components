import babel from 'rollup-plugin-babel';

var dest = 'dist/Navdrawer.js';
var destES = 'dist/Navdrawer.es.js';
var sourceMap = true;

if (process.env.NODE_ENV === 'production') {
  dest = 'dist/Navdrawer.min.js';
  destES = 'dist/Navdrawer.min.es.js';
  sourceMap = false;
}

export default {
  entry: 'src/Navdrawer.js',
  moduleName: 'RadNavdrawer',
  targets: [ { dest: dest, format: 'umd' }, { dest: destES, format: 'es' } ],
  sourceMap,
  plugins: [
    babel({
      babelrc: true,
      externalHelpers: false,
      runtimeHelpers: false,
      exclude: 'node_modules/**'
    })
  ],
  external: [ 'react' ],
  globals: { react: 'React' }
}
