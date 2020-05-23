// @ts-ignore
import download from 'download-git-repo'
const ora = require('ora')

const option = {
  clone: true
}

const choices: any = {
  'react-chat': 'github:baixiaoyu2997/react-chat',
  'vue-work': 'github:baixiaoyu2997/vue-work'
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
    const spinner = ora('Downloading...').start()

    // TODO : 目前下载路径写死为当前目录
    download(choices[answers.git], answers.git, option, (err: object) => {
      spinner.stop()
      if (err) return reject(err)
      resolve()
    })
  })
}

export default {
  prompt,
  option,
  onPromptComplete
}
