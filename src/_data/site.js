// Settings of the site. Thanks and feedback go as prepared e-mails for the MVP (no server, no counter);
// counting with one click comes later (README.md, "Thanks and feedback").
export default {
  origin: "https://lernapps.net",
  repo: "https://github.com/lernapps/apps",
  email: "lernapps@beimir.net",
  thanksEmail: "Danke-lernapps@beimir.net",
  feedbackEmail: "Feedback-lernapps@beimir.net",
  // Building an app with the tooling (lernapps/tooling, the npm package @lernapps/tooling): its guide for assistants,
  // the skill that is the quick path, and the command that starts an app (`init`: the plan template and the skills,
  // from the registry). The page /build/ and llms.txt show them; test/entry-point.e2e.test.mjs runs the command from
  // the built page. Listing a published app: the skill lernapps-listing, the way /enter/ and
  // llms.txt promote; `skills` is the command that installs both skills.
  tooling: {
    home: "/tooling/",
    llms: "https://lernapps.net/tooling/llms.txt",
    skill: "https://github.com/lernapps/tooling/blob/main/skills/process/lernapps-app/SKILL.md",
    skillRaw: "https://raw.githubusercontent.com/lernapps/tooling/main/skills/process/lernapps-app/SKILL.md",
    // the skill's platform rules: what every app keeps to, however it is built; /build/ gives them to free builders
    platformRules: "https://github.com/lernapps/tooling/blob/main/skills/tooling/lernapps-cli/references/platform-rules.md",
    init: "npx --yes @lernapps/tooling init <name>",
    listing: "https://github.com/lernapps/tooling/blob/main/skills/process/lernapps-listing/SKILL.md",
    listingRaw: "https://raw.githubusercontent.com/lernapps/tooling/main/skills/process/lernapps-listing/SKILL.md",
    skills: "npx skills add lernapps/tooling",
    // which assistant to build with, the setups we use and three apps a budget model built (/build/)
    assistants: "/tooling/assistants/",
    // GitHub explained for creators (/build/), and the skill for GitHub access and the fork path (llms.txt)
    github: "/tooling/github/",
    githubRaw: "https://raw.githubusercontent.com/lernapps/tooling/main/skills/process/lernapps-github/SKILL.md",
  },
  // Pull request previews (pr-preview.yml) set SITE_PATH_PREFIX and SITE_PREVIEW: banner, noindex.
  preview: Boolean(process.env.SITE_PREVIEW),
};
