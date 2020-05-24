const fs = require('fs')
const path = require('path')

export default {
  // 获取目录名称
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd())
  },

  // 判断目录是否存在
  directoryExists: (filePath: string) => {
    return fs.existsSync(filePath)
  }
}
