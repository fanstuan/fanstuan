import json from '@rollup/plugin-json'
import hashbang from 'rollup-plugin-hashbang'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import externals from 'rollup-plugin-node-externals'
// const pkg = require('package.json')

// console.log(pkg)
export default {
  input: 'packages/cli/dist/index.js',
  output: {
    file: 'packages/cli/bin/fantuan.js',
    format: 'cjs'
  },
  plugins: [
    hashbang(),
    json(),
    externals({
      builtins: false,

      // Make pkg.dependencies external. Optional. Default: false
      deps: false,

      // Make pkg.peerDependencies external. Optional. Default: true
      peerDeps: false,

      // Make pkg.optionalDependencies external. Optional. Default: false
      optDeps: false,

      // Make pkg.devDependencies external. Optional. Default: false
      devDeps: false,
      except: ['electron']
    }),
    nodeResolve(),
    commonjs()
  ]
  //   // 指出应将哪些模块视为外部模块
  //   external: [
  //     ...Object.keys(pkg.dependencies || {}),
  //     ...Object.keys(pkg.peerDependencies || {}),
  //     // ...['path', 'url'] // for @vue/compiler-sfc
  //   ]
}
