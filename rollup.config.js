import { terser } from 'rollup-plugin-terser';

export default {
  input: 'lib/index.js',
  output: [
    {
      file: 'dist/cronkr.js',
      name: 'cronkr',
      format: 'umd',
      sourcemap: true
    },
    {
      file: 'dist/cronkr.min.js',
      name: 'cronkr',
      format: 'umd',
      plugins: [terser()]
    },
  ]
}
