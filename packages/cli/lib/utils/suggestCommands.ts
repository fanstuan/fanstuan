import * as didYouMean from 'didyoumean2' // 简易的智能匹配引擎
import * as program from 'commander'
import * as chalk from 'chalk'

export default function suggestCommands (cmd) {
  const avaliableCommands = program.commands.map(cmd => {
    return cmd._name
  })
  // 简易智能匹配用户命令
  const suggestion = didYouMean.default(cmd, avaliableCommands)
  if (suggestion) {
    console.log('  ' + chalk.red(`Did you mean ${chalk.yellow(suggestion)}?`))
  }
}
