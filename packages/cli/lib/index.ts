import chalk from 'chalk'
import program from 'commander'
import inquirer from 'inquirer'
import { git } from './promptModules/index'
import checkNodeVersion from './utils/checkNodeVersion'
import suggestCommands from './utils/suggestCommands'
// @ts-ignore
import { fetchPkg } from 'fetch-pkg'
// const packageJson = require('package-json')

import fs from 'fs'
import requiredNodeVersion from '../package.json'

// // 检测node版本是否符合要求
checkNodeVersion(requiredNodeVersion.engines.node, '@fanstuan/cli')

program
  .command('download')
  .description('选择一个远程仓库下载到本地')
  .action(() => {
    inquirer.prompt(git.prompt).then(async (answers: object) => {
      await git.onPromptComplete({ answers }).catch(() => {
        process.exit()
      })
    })
  })

program
  .command('add')
  .description('添加一个模板')
  .action(async () => {
    console.time()
    // console.log(
    //   await packageJson('@fanstuan/cli-template', {
    //     registryUrl: 'https://npm.pkg.github.com'
    //   })
    // )
    // console.log(console.timeEnd)
    fetchPkg('@fanstuan/cli-template', {
      registryURL: 'https://npm.pkg.github.com',
      token: 'bd7ff84f88c5007229a2f553130cdae3e5a2860b'
    })
      .then((pkg: any) => {
        console.timeEnd()
        pkg.pipe(fs.createWriteStream('template')).once('finish', () => {
          process.exit(0)
        })
      })
      .catch((e: object) => console.log(e))
  })
// 处理非法命令
program.arguments('<command>').action(cmd => {
  // 不退出输出帮助信息
  program.outputHelp()
  console.log('  ' + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`))
  suggestCommands(cmd)
})

program.parse(process.argv)
