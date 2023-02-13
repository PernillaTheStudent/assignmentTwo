import { exec } from "child_process"  // köra kod i node, som om node har tillgång till terminalen
import util from "util"

// const { exec } = require("child_process")
// const exec = require('child_process').exec
// const util = require("util")

async function getGitVersion() {
    const asyncExec = util.promisify(exec)
    // destructuring
    // const { stdout: gitVersion } = await asyncExec("git --version");
    const response = await asyncExec('git --version');
    const gitVersion = response.stdout;
    const stderr = response.stderr;
    // console.log(`git version inside: ${gitVersion}`);
    return gitVersion.trim()
}

// export const test = 'test'
export default getGitVersion
// module.exports = getGitVersion
