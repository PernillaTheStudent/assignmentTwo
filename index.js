import chalk from "chalk";
import fs from "fs/promises";   // module for interacting with file system
import open from "open";
import { Command } from "commander";  // command-line interface (CLI) parser 
import { formatDistanceToNow, parse, format, set } from "date-fns";
import getGitVersion from "./src/getGitVersion.js";
import createIndexHtml from "./src/createIndexHtml.js";
import isBeforeOrAfter from "./src/isBeforeOrAfter.js"

const magentaBg = chalk.bold.bgMagentaBright;
const cyanBg = chalk.bold.bgCyanBright;
const cyan = chalk.bold.cyanBright;
const underline = chalk.cyanBright.underline;
const yellowUnderline = chalk.yellowBright.underline;
const red = chalk.bold.redBright;

const gitVersion = await getGitVersion();

const first = " Pernilla ";
const last = " Widerberg ";
const name = `${magentaBg(first)} ${cyanBg(last)}`;
console.log(name);

const processNpm = process.env.npm_config_user_agent;
console.log(`npm & node: ${processNpm}`)

const argumentParser = new Command();
argumentParser
    .option("--date")
    .parse();

const inputDateString = argumentParser.args[0];
const outputDate = parse(inputDateString, "yyyy-MM-dd", new Date());
// console.log("Date", format(new Date(2014, 1 ,11), "yyyy-MM-dd"))
const today = format(new Date(), "EEEE do LLLL y");
const timeNow = format(new Date(), "hh:mm");
const startOfCourse = new Date(2023, 0, 31);
const numberOfDaysOfReact = formatDistanceToNow(startOfCourse);
const currentDate = set(new Date(), {hours: 0, minutes: 0, seconds: 0, milliseconds: 0});

console.log("inputDateString: ", red(inputDateString));
console.log("outputDate: ", outputDate);
console.log(cyan("outputDate: "), yellowUnderline(outputDate));
console.log(cyan("currentDate: "), underline(currentDate));

function compareDates(date) {
    const dateCompared = isBeforeOrAfter(date);
    
    if (dateCompared === -1) {
        return "The input date is before today!"
    } else if (dateCompared === 1) {
        return "The input date is after today!"
    } else if (dateCompared === 0) {
        return "The input date is the same as today!"
    } else {
        return "The input is not a valid date!"
    }
}

const result = compareDates(outputDate);

const fileContentMD = `
${today}
The time is ${timeNow}
Name: ${first}${last}
Current number of days of React course: ${numberOfDaysOfReact}
Input date from terminal is: ${inputDateString}
${result}
Npm & node: ${processNpm}
Git version: ${gitVersion}
`;

await fs.writeFile("index.md", fileContentMD);

const dateArgs = {
    "today": today,
    "timeNow": timeNow,
    "first": first,
    "last": last,
    "numberOfDays": numberOfDaysOfReact,
    "inputDateString": inputDateString,
    "result": result,
    "process": processNpm,
    "gitVersion": gitVersion
}
const fileContentHTML = createIndexHtml(dateArgs);
await fs.writeFile("index.html", fileContentHTML);
await open("./index.html", {app: {name: "google chrome"}} );
