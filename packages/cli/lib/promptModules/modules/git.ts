// @ts-ignore
import download from 'git-clone'
import file from '../../utils/file'
import chalk from 'chalk'

const ora = require('ora')

const option = {}

interface Choices {
  [props: string]: string
}
const choices: Choices = {
  'fantuan.yaadmin': 'https://git.nerdlinux.com/fantuan.yaadmin.git',
  'fantuan.react': 'https://git.nerdlinux.com/fantuan.react.git'
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
    if (file.directoryExists(answers.git)) {
      console.log(chalk.red(`已经存在${answers.git}目录`))
      reject(new Error())
    }

    const spinner = ora('Downloading...').start()

    // TODO : 目前下载路径写死为当前目录
    download(choices[answers.git], answers.git, option, (err: object) => {
      spinner.stop()
      if (err) {
        console.log(err)
        return reject(err)
      } else {
        console.log(chalk.green('✨ 下载成功'))
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
