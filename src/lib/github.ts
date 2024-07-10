import { Octokit } from "octokit";

export const octokit = new Octokit({
  auth: process.env.GITHUB_SECRET,
});

export const getGitHubUser = async () => {
  const profile = await octokit.request("GET /user", {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  console.log(profile);
};
