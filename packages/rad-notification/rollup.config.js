import babel from 'rollup-plugin-babel';

var dest = 'dist/Notification.js';
var destES = 'dist/Notification.es.js';
var sourceMap = true;

if (process.env.NODE_ENV === 'production') {
  dest = 'dist/Notification.min.js';
  destES = 'dist/Notification.min.es.js';
  sourceMap = false;
}

export default {
  entry: 'src/Notification.js',
  moduleName: 'RadNotification',
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
