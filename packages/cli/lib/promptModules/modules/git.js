import download from "download-git-repo";

const option = {
  clone: true,
};

const choices={
  'react-chat':'github:baixiaoyu2997/react-chat',
  'vue-work':'github:baixiaoyu2997/vue-work'
}

const prompt = [
  {
    type: "list",
    name: "git",
    message: "请选择一个你要下载的项目",
    choices: Object.keys(choices).map(x=>({name:x})),
  },
];

const onPromptComplete = ({ answers, options }) => {
  console.log(answers);
  console.log(options);
  return new Promise((resolve, reject) => {
    console.log(process.cwd());
    //TODO : 目前下载路径写死为当前目录
    download(choices[answers.git],answers.git, option, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};

export default {
  prompt,
  option,
  onPromptComplete,
};
