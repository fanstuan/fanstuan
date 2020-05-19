#!/usr/bin/env node
import chalk from 'chalk'
import * as program from 'commander'
import inquirer from 'inquirer'
import { git } from './promptModules/index.ts'
import checkNodeVersion from './utils/checkNodeVersion.ts'
import suggestCommands from './utils/suggestCommands.ts'
import requireFile from './utils/requireFile.ts'
const requiredNodeVersion = requireFile('../package.json')

// 检测node版本是否符合要求
checkNodeVersion(requiredNodeVersion.engines.node, '@fanstuan/cli')

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
