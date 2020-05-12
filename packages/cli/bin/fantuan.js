#!/usr/bin/env node
import program from "commander";
import inquirer from "inquirer";
import { git } from "../lib/promptModules/index.js";
import checkNodeVersion from "../lib/util/checkNodeVersion.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const requiredNodeVersion = require("../package.json");

checkNodeVersion(requiredNodeVersion.engines.node,'@fanstuan/cli')
program.command("download").action(() => {
  inquirer
    .prompt(git.prompt)
    .then(async (answers) => {
      await git.onPromptComplete({answers}).catch(e=>{
        console.log(e);
      })
    });
});

program.parse(process.argv);
