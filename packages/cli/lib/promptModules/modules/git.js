import download from "download-git-repo";

const option = {
  clone: true,
};
const onPromptComplete = ({ answers, options }) => {
  return new Promise((resolve, reject) => {
    console.log(process.cwd());
    //TODO : 目前下载路径写死为当前目录
    download(answers.git,'test', option, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};
const prompt = [
  {
    type: "list",
    name: "git",
    message: "请选择一个你要下载的项目",
    choices: [
      {
        name: "react-chat",
        value: "github:baixiaoyu2997/react-chat#master/",
      },
      { 
        name: "vue-work",
        value: "github:baixiaoyu2997/vue-work#master",
      },
    ],
  },
];

export default {
  prompt,
  option,
  onPromptComplete,
};
