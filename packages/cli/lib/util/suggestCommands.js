import didYouMean from 'didYouMean' // 简易的智能匹配引擎
import chalk from 'chalk'
export default function suggestCommands (cmd) {
  const avaliableCommands = program.commands.map(cmd => {
    return cmd._name
  })
  // 简易智能匹配用户命令
  const suggestion = didYouMean(cmd, avaliableCommands)
  if (suggestion) {
    console.log(`  ` + chalk.red(`Did you mean ${chalk.yellow(suggestion)}?`))
  }
}
