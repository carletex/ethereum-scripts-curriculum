import inquirer from "inquirer";
import { spawn } from "child_process";
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

const scriptOptions = Object.entries(scriptList).map(([id, data], index) => ({
  name: `${index}. ${data.name} (${data.teaser})`,
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

  const output = spawn("node", [scriptPath]);

  output.stdout.on("data", (data) => {
    console.log("\n", chalk.bgGreen(data.toString()));
  });

  output.stderr.on("data", (data) => {
    console.error("\n", chalk.bgRed(data.toString()), "\n");
  });

  output.on("exit", () => {
    console.log(
      "\t",
      chalk.white("check the code at"),
      chalk.bgGray(scriptPath),
      "\n"
    );

    prompt();
  });
};

const prompt = () => inquirer.prompt(questions).then(processAnswers);

prompt();
