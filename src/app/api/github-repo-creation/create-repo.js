const { Octokit } = require("@octokit/rest");
const simpleGit = require('simple-git');
const fs = require('fs-extra');
require('dotenv').config(); // We should figure out how we want to store secrets

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

// Create a repo and upload boiler plate
async function createRepoAndUploadFiles({ title, username, command }) {
  try {
    const repo = await octokit.repos.createForAuthenticatedUser({ // Creating the repo
      name: title,
      private: false, // True = Private Repo, False = Public Repo
    });
    console.log(`Repository ${title} created successfully.`);

    await octokit.repos.addCollaborator({ // Adding the user as a collaborator
      owner: repo.data.owner.login,
      repo: title,
      username: username,
      permission: 'admin', // The options here are pull, push, or admin. We could just give them pull I think
      // since I assume users would want to create their own repo once they get their boiler plate?
    });
    console.log(`Added ${username} as a(n) ${permission} collaborator to ${title}.`);

    const outputDir = `./${sanitizedTitle}`;
    await fs.ensureDir(outputDir);

    exec(command, { cwd: outputDir }, async (error, stdout, stderr) => { // Create the files + error handling
      if (error) {
        console.error(`Error executing command: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Command error output: ${stderr}`);
        return;
      }
      console.log(`Command output: ${stdout}`);

      // Initialize git, add files, commit, and push to the github repo
      const git = simpleGit(outputDir);
      await git.init();
      await git.addRemote("origin", repo.data.clone_url);
      await git.add(".");
      await git.commit("Initial commit with generated files");
      await git.push("origin", "main");

      console.log(`Files have been uploaded to the repository ${sanitizedTitle}.`);
    });
  } catch (error) {
    console.error("Error creating repo, adding collaborator, or uploading files:", error);
  }
}

// Test example below
/*
const input = {
  title: "my-test-app",
  username: "AndrewDykstra",
  command: `npx create-next-app my-app --typescript --tailwind --eslint --app --src-dir --use-npm`,
};

createRepoAndUploadFiles(input);
*/
