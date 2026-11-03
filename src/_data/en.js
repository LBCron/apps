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
    searched: { topic: "on “{v}”", subject: "in {v}", grade: "for grade {v}" },
    empty: {
      headline: "There is no app for this yet. Not yet.",
      headlineSearched: "There is no app {suche} yet. Not yet.",
      body: [
        "There is no company and no editorial team behind lernapps.net. Every app here was built by a person who cares about good digital education. That is why a lot is still missing, and some grades hardly appear.",
        "The good news: your AI assistant already knows the subject matter. You know what learners in this grade need. Together you build the app, and then everyone finds it here. You don't have to program.",
      ],
      build: "Build an app yourself",
    },
    practice: "Only want to practise for a test with your own material?",
    practiceLink: "Then have a look at Practise",
    hint: { text: "Nothing that fits?", link: "Build one yourself" },
    build: {
      headline: "Nothing that fits?",
      body: "No editorial team writes here; people like you build the apps. What is missing, you can build yourself. Then everyone else who looks for it finds it too.",
      link: "Build an app yourself",
    },
    trust: {
      headline: "Which apps are listed here",
      body:
        "Only apps that run in the browser, without sign-up and without installation. They are free, have no ads and collect nothing in secret. So you can use them without a long check.",
      link: "What exactly we require",
      whoHeadline: "Who is behind lernapps.net",
      who: "Not a company, but people who care about digital education. Teachers, parents and others build the apps and offer them here to everyone. We earn nothing from you or your data. That is why there are no ads and no accounts here.",
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
    searched: "Looking for something {suche}? Then build it, for you and everyone who looks for it.",
    give: {
      headline: "Who brings what",
      items: [
        { who: "you", title: "You bring", body: "What your learners need: which content is coming up, where they struggle, which examples they know." },
        { who: "ki", title: "The AI brings", body: "The subject knowledge and the programming. It plans with you, builds the app and checks it." },
        { who: "la", title: "lernapps.net brings", body: "Templates, rules and checks, so that the app turns out well. And the way to share it with others." },
      ],
    },
    haveApp: "Already have an app?",
    haveAppLink: "Go straight to listing it",
    start: {
      headline: "Tell your assistant:",
      body: "You need an AI assistant that may run commands on your computer. Copy this task and give it to the assistant.",
      label: "Task for your assistant",
      prompt: (llms, command, search = "") =>
        `Build a learning app for lernapps.net with me${search}. First read ${llms} and follow the quick path: start the app in a new, empty folder with ${command} (for <name> a short name without spaces). Then ask me what the app should teach, and write the plan with me. Only when I have confirmed the plan, create the app as the plan says.`,
      copy: "Copy task",
      copied: "Copied",
      practice: "Want to practise for a test with your own material?",
      practiceLink: "Then have a look at Practise",
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
  // ── Learning map ──────────────────────────────────────────────────────────────────────────────────────
  map: {
    name: "Learning map",
    home: {
      text: "What is there to learn in your subject, and which app already practises it?",
      link: "To the learning map",
    },
    app: {
      headline: "On the learning map",
      strand: (strand, subject) => `This app stays in the strand ${strand} of ${subject}.`,
      strandLink: (strand) => `To the strand ${strand}`,
      practises: "It practises these building blocks:",
    },
    breadcrumb: "Breadcrumb",
    grade: (label) => `Grade ${label}`,
    covered: "an app practises it",
    gap: "gap, no app yet",
    close: "Close",
    otherStrand: (strand) => `strand ${strand}`,

    terms: {
      title: "Learning map · lernapps.net",
      description:
        "For each subject, the learning map shows what there is to learn, how it builds on itself and which app already practises it.",
      headline: "Learning maps",
      lead: "A learning map shows what there is to learn in a subject and what builds on what. And it shows which app already practises something – and where an app is still missing.",
      subjects: "These maps exist so far",
      subjectInfo: (strands, competencies) => `${strands} strands · ${competencies} building blocks`,
      subjectCovered: (n) => `${n} of them already practised by an app`,
      subjectCurricula: (n) => (n === 1 ? "1 curriculum captured" : `${n} curricula captured`),
      subjectOpen: "Open the map",
      subjectsMore: "More subjects will follow.",
      apps: {
        headline: "The map and the apps",
        steps: [
          "The map splits a subject into <b>building blocks</b>. Each is a sentence: “I can …”.",
          "Each app says which building blocks its pages practise.",
          "On the map, such a building block is <b>blue</b>. Dashed means: an app is still missing here.",
        ],
        build: "Build an app for a gap",
      },
      method: {
        tag: "To be honest",
        headline: "The map is a method of our own",
        intro: "There is no ready-made template that shows how the knowledge of a subject belongs together. So we came up with a method of our own.",
        reasons: [
          "<b>Curricula</b> set the order in which things are taught. Each German state has its own. They show only in part how the knowledge belongs together logically.",
          "The <b>KMK educational standards</b> describe what children should be able to do. But they do not exist for every subject.",
        ],
        ours: "So we sort the knowledge by how it belongs together logically: what builds on what? Within that, each state gets its own order. Choose a curriculum on a map to see its grades.",
        feedback: "Something is missing or in the wrong place?",
        feedbackLink: "Let us know",
        feedbackNote: "(GitHub issue, needs a GitHub account)",
        issueTitle: "Learning map: ",
      },
      modelHeadline: "How the map is built",
      modelLead: "Click a box in the picture to get the term explained.",
      pictureLabel: "Picture: how the parts of the map belong together",
      nodes: {
        fach: "e.g. Mathematics",
        strang: "e.g. Probability",
        baustein: "“I can …”",
        lehrplan: "e.g. Hesse, grammar school",
        quelle: "e.g. KMK standards",
        app: "on lernapps.net",
        seite: "of an app",
      },
      edges: {
        hasMany: "has several",
        placement: "placement",
        from: "comes from",
        staysIn: "stays in one",
        practises: "practises",
        requires: "builds on",
      },
      sentencesLead: "Read each arrow as a sentence:",
      sentences: [
        "A subject has several strands.",
        "A strand has several building blocks.",
        "A building block builds on other building blocks.",
        "A curriculum places a building block in grades (placement).",
        "A subject comes from a source.",
        "An app stays in one strand.",
        "An app has several pages.",
        "A page practises building blocks.",
      ],
      definitions: "All terms as a list",
      kind: "Term",
      example: "Example:",
      inPicture: "In the picture:",
      items: [
        {
          id: "fach",
          title: "Subject",
          text: "A school subject. Each subject has a learning map of its own.",
          example: "Mathematics, physics, music.",
          links: "A subject has several strands. Its strands and building blocks come from a source.",
        },
        {
          id: "strang",
          title: "Strand",
          text: "A part of the subject that runs over several school years. What is in it builds on itself.",
          example: "Algebra, geometry, probability.",
          links: "A strand has several building blocks. An app stays in one strand.",
        },
        {
          id: "baustein",
          title: "Building block",
          text: "One thing a child can learn, as a sentence “I can …”. Each building block belongs to exactly one strand.",
          example: "“I can calculate the percentage value.”",
          links: "A building block builds on other building blocks. A curriculum places it in grades. Pages of apps practise it.",
        },
        {
          id: "baut-auf",
          title: "builds on",
          text: "Building block B needs building block A first. This also holds across strands. Together they make the learning path. There is no fixed order within a strand.",
          example: "Exponential growth (strand Functions) builds on percentages (strand Arithmetic).",
          links: "The arrow leads from one building block to another.",
        },
        {
          id: "richtstufe",
          title: "Grade band",
          text: "Roughly in which two school years a building block is taught: grade 5/6, 7/8 or 9/10. Every building block has one. The map shows it when no curriculum is chosen or a curriculum does not place the building block.",
          example: "Tree diagram: grade band 7/8.",
          links: "The grade band is part of the building block. It has no box of its own in the picture.",
        },
        {
          id: "lehrplan",
          title: "Curriculum and placement",
          text: "A curriculum holds for one German state and one type of school. The placement says in which grade this curriculum teaches a building block. That can be several grades. We capture the curricula one by one.",
          example: "Tree diagram: curriculum Hesse, grammar school: grades 7 and 10.",
          links: "A curriculum places building blocks in grades.",
        },
        {
          id: "quelle",
          title: "Source",
          text: "Where the strands and building blocks of a subject come from. The source says how binding the map is.",
          example: "KMK educational standards in mathematics (2022). For subjects without standards, a subject association or one state's curriculum.",
          links: "A subject comes from a source.",
        },
        {
          id: "app",
          title: "App",
          text: "A learning app on lernapps.net. It stays in one strand and grows along the learning path with new versions.",
          example: "An app “Probability 5–10”.",
          links: "An app stays in one strand and has several pages.",
        },
        {
          id: "seite",
          title: "Page",
          text: "A page of an app. It practises one or more building blocks. That is how the map knows which building blocks are practised and where the gaps are.",
          example: "The page “Percentage value” of an app on percentages.",
          links: "A page belongs to an app and practises one or more building blocks.",
        },
      ],
      rulesHeadline: "Three rules",
      rules: [
        "Each building block belongs to exactly one strand.",
        "Each app stays in one strand and grows with new versions along the arrows “builds on”.",
        "When a building block is taught is set by the curriculum. Without a curriculum, the grade band holds.",
      ],
      data: "For AI assistants, each map is also available as data:",
    },

    subject: {
      title: (subject) => `Learning map ${subject} · lernapps.net`,
      titleCurriculum: (subject, curriculum) => `Learning map ${subject}, ${curriculum} · lernapps.net`,
      description: (subject) => `What there is to learn in ${subject}, when it is taught and which app already practises it.`,
      headline: (subject) => `Learning map ${subject}`,
      howTo: {
        headline: "How to read the map",
        all: "All terms and how they belong together",
        method: "Why this method?",
        items: [
          { term: "Strand", id: "strang", where: "a column", text: "A part of the subject that runs over several school years." },
          { term: "Building block", id: "baustein", where: "a box", text: "One thing a child can learn: “I can …”." },
          { term: "Grade band", id: "richtstufe", where: "a row", text: "Roughly when a building block is taught. Choose a curriculum to see its grades." },
          { term: "App", id: "app", where: "the colour", text: "Blue means covered: an app practises the building block. Dashed means a gap: no app practises it yet." },
        ],
      },
      when: {
        label: "What is taught when?",
        richtstufe: "Grade band (no curriculum)",
        curriculum: (land, schoolType) => `Curriculum ${land}, ${schoolType}`,
        missing: (land) => `Curriculum ${land} – not captured yet`,
        missingList: "Not captured yet:",
        current: "(chosen)",
      },
      mode: {
        richtstufe:
          "You see the grade band: roughly in which two school years a building block is taught. Each German state sets this a little differently. Choose a curriculum, and the map sorts the building blocks by its grades.",
        curriculum: (name, placed, total) =>
          `You see the curriculum ${name}. It places ${placed} of ${total} building blocks in a grade. A building block stands in the first grade in which it is taught. “Again in grade …” says when the curriculum takes it up again. Building blocks without a grade stay in the striped row of their grade band.`,
      },
      legend: { covered: "Covered", gap: "Gap" },
      filter: "Show building blocks",
      corner: "Grade ↓ · Strand →",
      gridLabel: (subject) => `Learning map ${subject}: building blocks by strand and grade`,
      noGrade: "no grade yet",
      count: (covered, total) => `${covered} of ${total} building blocks practised`,
      again: (grades) => `again in grade ${grades}`,
      hint: "Click a building block to see what it builds on, when it is taught and which app practises it.",
      source: "Strands and building blocks come from:",
      json: "The map as data (JSON)",
      details: {
        kind: (strand) => `Building block · ${strand}`,
        richtstufe: "Grade band",
        unplaced: (band) => `not placed yet, the grade band ${band} holds`,
        requires: "Builds on",
        requiresNone: "no other building block",
        practised: "Practised in",
        practisedNone: "no app yet – a gap",
        more: "All about this building block",
      },
    },

    strand: {
      title: (strand, subject) => `${strand} · Learning map ${subject} · lernapps.net`,
      description: (strand, subject) => `The strand ${strand} in ${subject}: its building blocks by grade and the apps that practise them.`,
      whatIs: "Strand · what is that?",
      lead: "The building blocks are sorted by grade band. What a building block builds on is on its own page.",
      gridLabel: (strand) => `Building blocks and apps in the strand ${strand}, by grade band`,
      apps: "Apps in this strand",
      gap: "Gap · no app yet",
      barCount: (n, total) => `${n} of ${total} building blocks`,
      build: {
        headline: "Build an app for this strand",
        body: "An app stays in one strand. It starts with one building block and grows along the learning path with each new version, for example from grade 5 to 10.",
        link: "Build with an AI assistant",
      },
    },

    competency: {
      quote: (text) => `“${text}”`,
      title: (name, subject) => `${name} · Learning map ${subject} · lernapps.net`,
      whatIs: "Building block · what is that?",
      strand: "Strand",
      source: "Source",
      richtstufe: "Grade band",
      path: {
        headline: "Learning path",
        requires: "Builds on",
        self: "This building block",
        requiredBy: "Built on by",
        requiresNone: "It builds on no other building block.",
        requiredByNone: "No building block builds on it yet.",
      },
      when: {
        headline: "When is it taught?",
        body: "Each curriculum sets in which grade a building block is taught. Without a chosen curriculum, the map shows the grade band.",
        head: { which: "Placement", grade: "Grade", unit: "In the curriculum", state: "Status" },
        richtstufe: "Grade band",
        standard: "holds where no curriculum is chosen or captured",
        catalog: "kept in the catalog",
        unit: (unit) => `Unit ${unit}`,
        captured: "captured",
        unplaced: "not placed yet",
        others: "Other states",
        missing: "not captured yet",
      },
      apps: {
        headline: "Which app practises it?",
        none: "No app practises this building block yet. That is a gap.",
        appLink: "To the app",
        pages: "Pages that practise it:",
        build: "Do you have an idea how to practise it?",
        buildLink: "Build an app for this strand",
      },
    },

    lands: {
      BW: "Baden-Württemberg",
      BY: "Bavaria",
      BE: "Berlin",
      BB: "Brandenburg",
      HB: "Bremen",
      HH: "Hamburg",
      HE: "Hesse",
      MV: "Mecklenburg-Western Pomerania",
      NI: "Lower Saxony",
      NW: "North Rhine-Westphalia",
      RP: "Rhineland-Palatinate",
      SL: "Saarland",
      SN: "Saxony",
      ST: "Saxony-Anhalt",
      SH: "Schleswig-Holstein",
      TH: "Thuringia",
    },
  },
};

addMails(en);

export default en;
