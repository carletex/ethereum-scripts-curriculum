import inquirer from "inquirer";
import util from "util";
import { exec as childProccess } from "child_process";
const exec = util.promisify(childProccess);
import chalk from "chalk";
import scriptList from "./scriptsList.js";

console.log(chalk.inverse("#################################"));
console.log(chalk.inverse("   Ethereum Scripts Curriculum   "));
console.log(chalk.inverse("#################################\n\n"));

console.log(
  chalk.green(
    "A collection of scripts, using EthersJS, to help you learn the foundations of Ethereum.\n"
  )
);

const scriptOptions = Object.entries(scriptList).map(([id, data]) => ({
  name: `${data.name} (${data.teaser})`,
  value: id,
}));

scriptOptions.push({
  name: "Exit",
  value: "exit",
});

const questions = [
  {
    type: "list",
    name: "scriptToRun",
    message: "What script to do you want to run",
    choices: scriptOptions,
  },
];

const processAnswers = async (answers) => {
  const scriptToRun = answers.scriptToRun;
  if (scriptToRun === "exit") process.exit();

  const scriptPath = scriptList[scriptToRun].script;

  let output;
  try {
    output = await exec(`node ${scriptPath}`);
  } catch (e) {
    console.error("\n", chalk.bgRed(e.stderr), "\n");
    prompt();
    return;
  }
  console.log("\n", chalk.bgGreen(output?.stdout), "\n");
  prompt();
};

const prompt = () => inquirer.prompt(questions).then(processAnswers);

prompt();
