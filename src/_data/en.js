// All texts of lernapps.net/apps/ (English): the translation of de.js, same structure. Plain English, short
// sentences, active voice, no jargon, friendly "you". Templates contain no copy of their own.
import { addMails } from "./de.js";

const en = {
  meta: {
    siteName: "lernapps.net",
  },

  // Words for the data of an entry.
  grades: {
    one: (g) => `Grade ${g}`,
    two: (a, b) => `Grades ${a} and ${b}`,
    range: (a, b) => `Grades ${a} to ${b}`,
  },

  // ── Find ─────────────────────────────────────────────────────────────────────────────
  find: {
    title: "Find learning apps · lernapps.net",
    description:
      "Find a learning app for your next lesson or for tonight: free, no sign-up, ready right away.",
    headline: "A learning app for your next lesson",
    lead: "Free, no sign-up, ready right away. Search by topic and grade.",
    parents: "A test tomorrow? Your child can start tonight at the kitchen table.",
    form: {
      label: "Search",
      query: "Topic",
      queryPlaceholder: "e.g. percent or tree diagram",
      subject: "Subject",
      allSubjects: "All subjects",
      grade: "Grade",
      allGrades: "All grades",
    },
    count: { none: "No app found", one: "1 app", many: (n) => `${n} apps` },
    matched: "Matches your search:",
    empty: {
      headline: "There is no app for this yet.",
      body: "lernapps.net is just getting started. Do you know a fitting app, or did you publish one yourself?",
      link: "List an app",
    },
    build: {
      headline: "Nothing found?",
      body: "Help yourself and build an app. With our tooling it is really easy.",
      link: "Build an app",
    },
    trust: {
      headline: "Which apps are listed here",
      body:
        "Only apps that run in the browser, without sign-up and without installation. They are free, have no ads and collect nothing in secret. So you can use them without a long check.",
      link: "What exactly we require",
    },
    cardLink: (title) => `More about ${title}`,
    chips: ["No sign-up", "No installation", "Free"],
  },

  // ── App page ─────────────────────────────────────────────────────────────────────────
  app: {
    title: (name) => `${name} · lernapps.net`,
    by: "Built by",
    open: "Open the app",
    openHint: "Opens in a new tab. This page stays open.",

    topics: {
      headline: "Straight to a topic",
      body: "Each link leads to exactly this topic in the app.",
    },

    fitness: {
      headline: "May you use it?",
      lead: "The most important points at a glance:",
      account: "No sign-up: nobody needs an account.",
      install: "No installation: the app runs in the browser, on any device.",
      free: "Free and without ads.",
      storage: {
        none: "The app stores nothing.",
        device: "What people enter stays on the device. At most, the app remembers progress in the browser.",
      },
      thirdParty: {
        none: "No connection to third-party servers.",
        "on-click": (note) => `Third-party servers only after a click. ${note}`,
      },
      unchecked: "The app was checked: when it was listed, an automatic check compared these statements with the app.",
      checked: "lernapps.net checked these statements automatically.",
    },

    bring: {
      headline: "How the app gets to your class",
      linkLabel: "Link for your class",
      copy: "Copy link",
      copied: "Copied",
      qrLabel: "To scan with tablets or phones",
      qrAlt: (name) => `QR code for ${name}`,
      tips: [
        "On the projector: open the app and switch to full screen.",
        "On the class's devices: share the link or show the QR code.",
        "At home: send your child the link. No account needed.",
      ],
    },

    thanks: {
      headline: "Did the app help?",
      body: (creator) =>
        `lernapps.net is free. Your thanks go to ${creator}. They show that the app helps. And they keep lernapps.net alive.`,
      how: "One click opens your email program with a ready message. You only have to send it.",
      thank: "Say thanks",
      usedHeadline: "Where did you use it?",
      used: [
        { key: "unterricht", label: "In class" },
        { key: "zuhause", label: "At home" },
      ],
      feedbackHeadline: "How did it go?",
      issue: (creator) => `Do you have a GitHub account? Then write to ${creator} directly:`,
      issueLink: "Open an issue",
      issueTitle: (app) => `Feedback on “${app}”`,
      issueBody: (page) => `App: ${page}\n\nWhat did you notice?\n`,
      feedback: [
        { key: "gut", label: "It fit well" },
        { key: "zu-schwer", label: "Was too hard" },
        { key: "zu-leicht", label: "Was too easy" },
        { key: "technik", label: "Had technical problems" },
        { key: "fehler", label: "Mistake in the content" },
      ],
      opened: "Thank you! Send the email and it arrives.",
      noMail: { before: "No email program? Just write to", thanks: "(thanks)", or: "or", feedback: "(feedback)." },
      privacy:
        "Until we count clicks, your thanks reach us as an email. We see your email address then. We use it only for this. The addresses are on beimir.net, the founder's domain.",
      privacyLink: "More about this",
      privacyHref: "/privacy/#en-thanks",
      reminder: "Back from the app? Say thanks if it helped.",
      reminderLink: "Go to thanks",
    },

    // The prepared e-mails. The note says why it is an e-mail for now.
    mail: {
      thanksSubject: (app) => `Thanks for “${app}”`,
      thanksBody: (app, creator, page) =>
        `Thanks for “${app}”!\n\n(You can add something here. You don't have to.)\n\n` +
        `App: ${page}\n\n` +
        `– Note from lernapps.net –\nLater you will say thanks with one click, without any email. We will only count it as a sum. ` +
        `This email just helps us test whether thanks arrive. We pass your thanks on to ${creator}.`,
      usedSubject: (app, where) => `Used: ${where} – “${app}”`,
      feedbackSubject: (app, label) => `Feedback on “${app}”: ${label}`,
      feedbackBody: (line, page) =>
        `${line}\n\n(If you like: what exactly? You don't have to write anything.)\n\n` +
        `App: ${page}\n\n` +
        `– Note from lernapps.net –\nLater you will give feedback with one click, without any email. ` +
        `This email just helps us test whether feedback arrives.`,
      wave: "Referral:", // + the referral code, added by assets/app.js
    },

    creator: {
      headline: "Who built the app",
      source: "View source code",
      own: "Did you publish a learning app yourself?",
      ownLink: "List it",
    },
    back: "All apps",
  },

  // ── Build ────────────────────────────────────────────────────────────────────────────
  build: {
    title: "Build an app · lernapps.net",
    description:
      "Build a learning app with your AI assistant, even without programming skills. It plans with you, builds the app and checks it.",
    headline: "Build a learning app\nwith your AI assistant.",
    lead:
      "You don't have to program. You say what the app should teach. Your assistant plans with you, builds the app and checks it.",
    haveApp: "Already have an app?",
    haveAppLink: "Go straight to listing it",
    start: {
      headline: "Tell your assistant:",
      body: "You need an AI assistant that may run commands on your computer. Copy this task and give it to the assistant.",
      label: "Task for your assistant",
      prompt: (llms, command) =>
        `Build a learning app for lernapps.net with me. First read ${llms} and follow the quick path: start the app in a new, empty folder with ${command} (for <name> a short name without spaces). Then ask me what the app should teach, and write the plan with me. Only when I have confirmed the plan, create the app as the plan says.`,
      copy: "Copy task",
      copied: "Copied",
      command: "With this command, your assistant starts the app: it writes the plan and puts the skills in place. It downloads the tool for it from the npm registry by itself.",
      skill: "The quick path for assistants is the skill",
    },
    which: {
      headline: "Which assistant?",
      body: "Any assistant works if it can use skills and change files. We build with Claude Code ourselves. Even a very cheap model already builds good apps. But what counts most is what you know about your subject and your learners.",
      link: "Which assistants we use",
    },
    tools: {
      headline: "What lernapps.net provides for you to build",
      body: "Guides, templates for the apps and checks that help you build, easier and faster, an app that others can use well too. Your assistant uses them by itself. You can also read them yourself.",
      link: "Go to the build tools",
      github: "Your app is published through GitHub: free, public and at your own address. You do not need to know GitHub. The tools do most of it, and your assistant tells you when you need to click something.",
      githubLink: "What GitHub is and what we use it for",
    },
    free: {
      headline: "Rather build freely?",
      body: "You can also build your app without our templates: by hand, with another framework or with tools such as Lovable or bolt.new. Then add",
      rulesLink: "the rules of lernapps.net",
      rules: "to the tool, for example as knowledge for the project. They hold for every app, whatever it is built with. What counts are",
      criteriaLink: "the conditions",
      check: "When you list the app, we check the published app just like any other.",
    },
    next: {
      headline: "And then: out into the world",
      body: "Your app can be really good software for you. But if you want the world to hear about it, you have to publish it!",
      enterLink: "How to publish your app",
    },
  },

  // ── List ─────────────────────────────────────────────────────────────────────────────
  list: {
    title: "List an app · lernapps.net",
    description:
      "Is your learning app published? List it on lernapps.net in a few minutes. Then others find it, and you hear when it helped.",
    headline: "Is your learning app published?\nList it.",
    lead:
      "It takes a few minutes. After that, teachers and parents can find your app. And you hear when it helped.",
    noApp: "No app yet?",
    noAppLink: "How to build one with your AI assistant",
    criteria: {
      headline: "What we accept",
      items: [
        "The app runs in the browser, without installation.",
        "Nobody needs an account.",
        "It is free and has no ads.",
        "It collects nothing in secret: no analytics services, no ad networks. At most it loads third-party servers after a click, for example for a video.",
        "Learners do something themselves: try out, practise, decide.",
        "Its licence allows a copy (for example MIT or Apache 2.0 for the code, CC BY 4.0 for content): lernapps.net serves the app at lernapps.net. You stay its author.",
      ],
    },
    fields: {
      headline: "Three details are enough",
      items: [
        { label: "What do people learn with it?", hint: "Two or three sentences. What do the learners do?" },
        { label: "Who is it for?", hint: "Subject and grade." },
        { label: "Where can it be found?", hint: "The link to the app." },
      ],
      optional: "If you like: single topics with their own link. Then people searching land right at the right place.",
    },
    flow: {
      headline: "How listing works",
      steps: [
        { who: "you", label: "You & assistant", title: "You propose the app", body: "Your assistant opens a pull request with the three details." },
        { who: "auto", label: "automatic", title: "The check opens your app", body: "At your address, the way learners open it. If something is missing, it says so in the pull request, and your assistant fixes it." },
        { who: "team", label: "lernapps.net", title: "We take a look", body: "If everything fits, we add the app." },
        { who: "auto", label: "automatic", title: "The copy is made", body: "From exactly your version, checked once more, on lernapps.net." },
        { who: "team", label: "lernapps.net", title: "Others find it", body: "The catalog links the copy and your repository as the source code." },
      ],
      after: "After that, lernapps.net takes over new versions by itself.",
      afterLink: "Why there is a copy",
    },
    own: {
      headline: "Your app stays yours",
      intro:
        "Your app stays at your own address, for example on GitHub Pages. Once it is in the catalog, lernapps.net also serves a copy, at lernapps.net/apps/start/ and your app's name. Learners open that copy.",
      items: [
        {
          title: "We take nothing away from you.",
          body: "The repository, the licence and your address stay with you. You stay the author, and the catalog links your repository as the source code.",
        },
        {
          title: "We take the regulatory part off your hands.",
          body: "Schools ask who runs an app and what happens to the data. For the copy, lernapps.net answers: one provider, one privacy notice, one imprint. And the address stays, even if your app moves one day.",
        },
        {
          title: "The copy is your app.",
          body: "We build it from exactly the version you published and check it before learners see it. We change nothing in it.",
        },
        {
          title: "New versions arrive by themselves.",
          body: "When you publish a new version, lernapps.net usually takes it over within an hour. Updates of the tools go through by themselves; we look at changed content first.",
        },
      ],
    },
    ways: {
      headline: "How to list it",
      agent: {
        title: "With your AI assistant",
        body:
          "This is the fastest way. You need an AI assistant that may run commands on your computer, and a GitHub account. Copy this task and give it to the assistant.",
        prompt: (skill, install) =>
          `List my learning app on lernapps.net. Use the skill lernapps-listing (${skill}, install with ${install}) and follow it. First check whether the app meets the conditions. Here is the link to my app: `,
        label: "Task for your assistant",
        copy: "Copy task",
        copied: "Copied",
        skill: "Your assistant follows the skill",
      },
      form: {
        title: "Without an assistant: with the form",
        body: "Fill in the form on GitHub. We check the app and list it for you. You need a GitHub account for this.",
        button: "Go to the form",
      },
      mail: {
        title: "None of this works?",
        before: "Then send us the link to your app",
        link: "by email",
        after: "Oliver helps you with your first listing.",
        subject: "My app for lernapps.net",
      },
    },
    back: {
      headline: "What you get back",
      body:
        "We pass on every thanks and every piece of feedback on your app. Later we count them openly, as a sum, on your app's page. We won't know who clicked. And we don't want to know.",
    },
  },
};

addMails(en);

export default en;
