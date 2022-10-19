// Name: tana-paste-twitter
// Shortcut: CTRL + t

import "@johnlindquist/kit";

const url = await getActiveTab("Brave");
const summary = await arg("Summarize media");
const author = await arg("Author");
const state = await arg("Media State", [
  { name: "Viewed", value: "viewed" },
  { name: "Unviewed", value: "unviewed" },
]);

await copy(`%%tana%%
- ${summary} #tweet
    - Source:: ${url}
    - Author:: [[${author}]] #person
    - State:: ${state}
`);
