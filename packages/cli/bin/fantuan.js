#!/usr/bin/env node
import program from "commander";
import inquirer from "inquirer";
import promptModules from '../lib/promptModules/' 
program.command("download").action(()=> {
  inquirer
    .prompt([
        {
          type: 'list',
          name: 'git',
          message: '请选择一个你要下载的项目',
          choices: [
            {name:'react-chat',value:"git@github.com:baixiaoyu2997/react-chat.git"},
            {name:'vue-work',value:"git@github.com:baixiaoyu2997/vue-work.git"},
          ]
        }
      ])
    .then((answers) => {
        console.log(answers);
        console.log(promptModules);
      // Use user feedback for... whatever!!
    });
});

program.parse(process.argv);
