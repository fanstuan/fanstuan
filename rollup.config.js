import json from '@rollup/plugin-json'
import hashbang from 'rollup-plugin-hashbang'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
// const pkg = require('package.json')

// console.log(pkg)
export default {
  input: 'packages/cli/lib/index.js',
  output: {
    file: 'packages/cli/bin/fantuan.js'
  },
  plugins: [hashbang(), json(), nodeResolve(), commonjs()]
  //   // 指出应将哪些模块视为外部模块
  //   external: [
  //     ...Object.keys(pkg.dependencies || {}),
  //     ...Object.keys(pkg.peerDependencies || {}),
  //     // ...['path', 'url'] // for @vue/compiler-sfc
  //   ]
}
