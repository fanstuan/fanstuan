#!/usr/bin/env node
import chalk from 'chalk'
import commander from 'commander'
import inquirer from 'inquirer'
import { git } from './promptModules/index.js'
// import checkNodeVersion from './utils/checkNodeVersion.js'
import suggestCommands from './utils/suggestCommands.js'
// import requiredNodeVersion from '../package.json'
// // import requireFile from './utils/requireFile.js'
// // const requiredNodeVersion = requireFile('../package.json')
// console.log(requiredNodeVersion)
// // 检测node版本是否符合要求
// checkNodeVersion(requiredNodeVersion.engines.node, '@fanstuan/cli')
const { program } = commander

program
  .command('download')
  .description('选择一个远程仓库下载到本地')
  .action(() => {
    inquirer.prompt(git.prompt).then(async (answers: object) => {
      await git.onPromptComplete({ answers }).catch(e => {
        console.log(e)
      })
    })
  })

// 处理非法命令
program.arguments('<command>').action(cmd => {
  // 不退出输出帮助信息
  program.outputHelp()
  console.log('  ' + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`))
  suggestCommands(cmd)
})

program.parse(process.argv)
