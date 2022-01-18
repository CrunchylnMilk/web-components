import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";

export default {
  input      : "development/qr-code.js",
  output       : {
    dir: "dist",
    format: "es"

  },
  external: ['lit','lit/decorators.js'],
  plugins    : [
    nodeResolve({
      jsnext: true,
      main: false
    }),
    commonjs(),
    terser()
  ]
};