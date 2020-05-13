#!/usr/bin/env node
import chalk from 'chalk'
import program from 'commander'
import inquirer from 'inquirer'
import { git } from '../lib/promptModules/index.js'
import checkNodeVersion from '../lib/util/checkNodeVersion.js'
import suggestCommands from '../lib/util/suggestCommands.js'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const requiredNodeVersion = require('../package.json')

// 检测node版本是否符合要求
checkNodeVersion(requiredNodeVersion.engines.node, '@fanstuan/cli')

program
  .command('download')
  .description('选择一个远程仓库下载到本地')
  .action(() => {
    inquirer.prompt(git.prompt).then(async answers => {
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
