import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

var dest = 'dist/components.js';
var destES = 'dist/components.es.js';
var sourceMap = true;

if (process.env.NODE_ENV === 'production') {
  dest = 'dist/components.min.js';
  destES = 'dist/components.min.es.js';
  sourceMap = false;
}

export default {
  entry: 'src/components.js',
  moduleName: 'RadComponents',
  targets: [ { dest: dest, format: 'umd' }, { dest: destES, format: 'es' } ],
  sourceMap,
  plugins: [
    babel({
      babelrc: true,
      externalHelpers: true,
      runtimeHelpers: false,
      exclude: 'node_modules/**'
    })
  ],
  external: [
    'react',
    'RadCard',
    'RadCodehighlighter',
    'RadModal',
    'RadNavbar',
    'RadDrawer',
    'RadNotification',
    'RadPopover',
    'RadStepper',
    'RadTabs',
  ],
  globals: {
    react: 'React',
    RadCard: 'RadCard',
    RadCodehighlighter: 'RadCodehighlighter',
    RadModal: 'RadModal',
    RadNavbar: 'RadNavbar',
    RadDrawer: 'RadDrawer',
    RadNotification: 'RadNotification',
    RadPopover: 'RadPopover',
    RadStepper: 'RadStepper',
    RadTabs: 'RadTabs'
  }
}
