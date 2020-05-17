import chalk from 'chalk' // 命令行输出美化
import semver from 'semver'
export default function checkNodeVersion (wanted: string, cliName: string) {
  // 检测node版本是否符合要求范围
  if (!semver.satisfies(process.version, wanted)) {
    console.log(
      chalk.red(
        'You are using Node ' +
          process.version +
          ', but this version of ' +
          cliName +
          ' requires Node ' +
          wanted +
          '.\nPlease upgrade your Node version.'
      )
    )
    // 退出进程
    process.exit(1)
  }
}
