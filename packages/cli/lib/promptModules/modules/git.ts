// @ts-ignore
import download from 'download-git-repo'
import file from '../../utils/file'
import chalk from 'chalk'
import clear from 'clear'

const ora = require('ora')

const option = {
  clone: true
}

const choices: any = {
  'fantuan.yaadmin': 'direct:https://git.nerdlinux.com/fantuan.yaadmin.git',
  'fantuan.react': 'direct:https://git.nerdlinux.com/fantuan.react.git'
}
const prompt = [
  {
    type: 'list',
    name: 'git',
    message: '请选择一个你要下载的项目',
    choices: Object.keys(choices).map(x => ({ name: x }))
  }
]

const onPromptComplete = ({ answers }: any): Promise<null | object> => {
  return new Promise((resolve, reject) => {
    clear()
    if (file.directoryExists(answers.git)) {
      console.log(chalk.red(`已经存在${answers.git}目录`))
      reject(new Error())
    }

    const spinner = ora('Downloading...').start()

    // TODO : 目前下载路径写死为当前目录
    download(choices[answers.git], answers.git, option, (err: object) => {
      spinner.stop()
      if (err) {
        return reject(err)
      } else {
        resolve()
      }
    })
  })
}

export default {
  prompt,
  option,
  onPromptComplete
}
