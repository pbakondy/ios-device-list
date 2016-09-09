import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: './index.js',
  dest: 'build/ios-device-list.min.js',
  format: 'umd',
  moduleName: 'iosDeviceList',
  exports: 'named',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    json(),
    commonjs(),
    babel(),
    uglify()
  ],
};
