import getGitVersion from "./getGitVersion.js";
// const getGitVersion = require('./getGitVersion')

describe("test", () => {
    it("check if gitVersion makes sense", async () => {
        const gitVersion = await getGitVersion();
        // expect(gitVersion).toBe('git version 2.37.1 (Apple Git-137.1)');
        expect(gitVersion).toContain('git version');
    })
})
