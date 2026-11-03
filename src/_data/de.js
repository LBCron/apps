// All texts of lernapps.net/apps/ (German). Templates contain no copy of their own.
// The pages follow the experiences of the platform design (https://lernapps.net/docs/platform-design/, D7):
//   x-app-in-minutes      a teacher taking over a class at short notice: find, see it may be used, bring it to class, thank
//   x-child-struggles     a parent whose child struggles with a topic: find, start right away, come back, thank
//   x-list-and-hear-back  a creator: list the app in minutes, hear that it helped
// Language: plain German (ISO 24495-1): short sentences, active voice, no jargon, "du".
const de = {
  meta: {
    siteName: "lernapps.net",
  },

  // Words for the data of an entry.
  grades: {
    one: (g) => `Klasse ${g}`,
    two: (a, b) => `Klasse ${a} und ${b}`,
    range: (a, b) => `Klasse ${a} bis ${b}`,
  },

  // ── Finden (x-app-in-minutes, x-child-struggles: s-finding, t-find-app) ─────────────
  find: {
    title: "Lern-Apps finden · lernapps.net",
    description:
      "Finde eine Lern-App für deine nächste Stunde oder für heute Abend: kostenlos, ohne Anmeldung, sofort startklar.",
    headline: "Eine Lern-App für deine nächste Stunde",
    lead: "Kostenlos, ohne Anmeldung, sofort startklar. Such nach Thema und Klasse.",
    parents: "Morgen ist eine Arbeit? Dein Kind kann heute Abend am Küchentisch sofort loslegen.",
    form: {
      label: "Suche",
      query: "Thema",
      queryPlaceholder: "z. B. Prozent oder Baumdiagramm",
      subject: "Fach",
      allSubjects: "Alle Fächer",
      grade: "Klasse",
      allGrades: "Alle Klassen",
    },
    count: { none: "Keine App gefunden", one: "1 App", many: (n) => `${n} Apps` },
    matched: "Passt zu deiner Suche:",
    // What was searched, in words, for the box without a match and the page /build/. Filled in by the scripts
    // (assets/finden.js, assets/bauen.js); {v} is the value. Parts that are not set are left out.
    searched: { topic: "zu „{v}“", subject: "in {v}", grade: "für Klasse {v}" },
    // No match: say honestly why so much is missing, and show the way to build it (x-child-struggles, s-finding).
    empty: {
      headline: "Dazu gibt es noch keine App. Noch nicht.",
      headlineSearched: "{suche} gibt es noch keine App. Noch nicht.",
      body: [
        "Hinter lernapps.net steht keine Firma und keine Redaktion. Jede App hier hat ein Mensch gebaut, dem gute digitale Bildung wichtig ist. Darum fehlt noch vieles, und manche Klassen kommen kaum vor.",
        "Das Gute daran: Den Stoff kennt dein KI-Assistent schon. Du weißt, was Lernende in dieser Klasse brauchen. Zusammen baut ihr die App, und dann findet sie hier jede und jeder. Programmieren musst du dafür nicht.",
      ],
      build: "Selbst eine App bauen",
    },
    // Building is for the catalog; whoever only wants to practise for a test with their own material goes to /practice/.
    practice: "Du willst nur für eine Arbeit mit deinem eigenen Material üben?",
    practiceLink: "Dann schau bei Üben",
    // With a search and matches: one line under the count, always on the first screen.
    hint: { text: "Nichts Passendes dabei?", link: "Bau dir selbst eine" },
    // Under the results, always: whoever finds nothing fitting can build the app themselves.
    build: {
      headline: "Nichts Passendes dabei?",
      body: "Hier schreibt keine Redaktion, hier bauen Menschen wie du. Was fehlt, kannst du selbst bauen. Dann finden es auch alle anderen, die danach suchen.",
      link: "Selbst eine App bauen",
    },
    trust: {
      headline: "Welche Apps hier stehen",
      body:
        "Hier stehen nur Apps, die im Browser laufen, ohne Anmeldung und ohne Installation. Sie sind kostenlos, ohne Werbung und sammeln nichts heimlich. Darum kannst du sie einsetzen, ohne lange zu prüfen.",
      link: "Was wir genau verlangen",
      whoHeadline: "Wer hinter lernapps.net steht",
      who: "Kein Unternehmen, sondern Menschen, denen digitale Bildung wichtig ist. Lehrkräfte, Eltern und andere bauen die Apps und stellen sie hier allen zur Verfügung. Wir verdienen nichts an dir und deinen Daten. Darum gibt es hier keine Werbung und kein Konto.",
    },
    cardLink: (title) => `Mehr zu ${title}`,
    chips: ["Ohne Anmeldung", "Ohne Installation", "Kostenlos"],
  },

  // ── App-Seite (x-app-in-minutes: s-fitness-clarity … t-thank-creator-adult, t-give-feedback) ──
  app: {
    title: (name) => `${name} · lernapps.net`,
    by: "Gebaut von",
    open: "App öffnen",
    openHint: "Öffnet sich in einem neuen Tab. Diese Seite bleibt offen.",

    topics: {
      headline: "Direkt zu einem Thema",
      body: "Jeder Link führt genau zu diesem Thema in der App.",
    },

    fitness: {
      headline: "Darfst du sie einsetzen?",
      lead: "Das Wichtigste auf einen Blick:",
      account: "Ohne Anmeldung: Niemand braucht ein Konto.",
      install: "Ohne Installation: Die App läuft im Browser, auf jedem Gerät.",
      free: "Kostenlos und ohne Werbung.",
      storage: {
        none: "Die App speichert nichts.",
        device: "Was man eingibt, bleibt auf dem Gerät. Die App merkt sich höchstens den Lernstand im Browser.",
      },
      thirdParty: {
        none: "Keine Verbindung zu fremden Servern.",
        "on-click": (note) => `Fremde Server nur nach einem Klick. ${note}`,
      },
      unchecked:
        "Die App wurde geprüft: Bei der Aufnahme hat eine automatische Prüfung diese Angaben mit der App verglichen.",
      checked: "lernapps.net hat diese Angaben automatisch geprüft.",
      // The entry's limits: what the app does not offer of the platform's rules (WCAG 2.1 AA, usable at 360 px).
      limits: "Das bietet die App nicht:",
    },

    bring: {
      headline: "So kommt die App in deine Klasse",
      linkLabel: "Link für deine Klasse",
      copy: "Link kopieren",
      copied: "Kopiert",
      qrLabel: "Zum Scannen mit Tablets oder Handys",
      qrAlt: (name) => `QR-Code für ${name}`,
      tips: [
        "Am Beamer: App öffnen und auf Vollbild schalten.",
        "Auf den Geräten der Klasse: Link teilen oder QR-Code zeigen.",
        "Zu Hause: Schick deinem Kind den Link. Es braucht kein Konto.",
      ],
    },

    // The thank-you is a step of its own in every journey (D7). For the MVP it goes as a prepared e-mail
    // (mailto, no server); counting with one click comes later. Explained right where the click happens.
    thanks: {
      headline: "Hat die App geholfen?",
      body: (creator) =>
        `lernapps.net ist kostenlos. Dein Danke geht an ${creator}. Es zeigt, dass die App hilft. Und es hält lernapps.net am Leben.`,
      how: "Ein Klick öffnet dein E-Mail-Programm mit einer fertigen Nachricht. Du musst sie nur noch abschicken.",
      thank: "Danke sagen",
      usedHeadline: "Wo hast du sie genutzt?",
      used: [
        { key: "unterricht", label: "Im Unterricht" },
        { key: "zuhause", label: "Zu Hause" },
      ],
      feedbackHeadline: "Wie lief es?",
      // Feedback straight to the creator, as an issue in the app's repository (only for a source on GitHub).
      issue: (creator) => `Du hast ein GitHub-Konto? Dann schreib es direkt an ${creator}:`,
      issueLink: "Issue anlegen",
      issueTitle: (app) => `Rückmeldung zu „${app}“`,
      issueBody: (page) => `App: ${page}\n\nWas ist dir aufgefallen?\n`,
      feedback: [
        { key: "gut", label: "Hat gut gepasst" },
        { key: "zu-schwer", label: "War zu schwer" },
        { key: "zu-leicht", label: "War zu leicht" },
        { key: "technik", label: "Hat technisch gehakt" },
        { key: "fehler", label: "Fehler im Inhalt" },
      ],
      opened: "Danke! Schick die E-Mail ab, dann kommt sie an.",
      noMail: { before: "Kein E-Mail-Programm? Schreib einfach an", thanks: "(Danke)", or: "oder", feedback: "(Rückmeldung)." },
      privacy:
        "Bis wir Klicks zählen, kommt dein Danke als E-Mail bei uns an. Dabei sehen wir deine E-Mail-Adresse. Wir nutzen sie nur dafür. Die Adressen liegen auf beimir.net, der Domain des Gründers.",
      privacyLink: "Mehr dazu",
      privacyHref: "/privacy/#de-danke",
      reminder: "Zurück aus der App? Sag Danke, wenn sie geholfen hat.",
      reminderLink: "Zum Danke",
    },

    // The prepared e-mails. The note says why it is an e-mail for now (D8 a-thanks-arrive-unexplained:
    // the platform explains the thanks itself, nobody else does).
    mail: {
      thanksSubject: (app) => `Danke für „${app}“`,
      thanksBody: (app, creator, page) =>
        `Danke für „${app}“!\n\n(Hier kannst du noch etwas dazuschreiben. Du musst aber nicht.)\n\n` +
        `App: ${page}\n\n` +
        `– Hinweis von lernapps.net –\nSpäter sagst du Danke mit einem Klick, ganz ohne E-Mail. Wir zählen es dann nur als Summe. ` +
        `Diese E-Mail hilft uns jetzt nur zu testen, ob das Danke ankommt. Wir geben dein Danke an ${creator} weiter.`,
      usedSubject: (app, where) => `Genutzt: ${where} – „${app}“`,
      feedbackSubject: (app, label) => `Rückmeldung zu „${app}“: ${label}`,
      feedbackBody: (line, page) =>
        `${line}\n\n(Wenn du magst: Was genau? Du musst aber nichts dazuschreiben.)\n\n` +
        `App: ${page}\n\n` +
        `– Hinweis von lernapps.net –\nSpäter gibst du Rückmeldung mit einem Klick, ganz ohne E-Mail. ` +
        `Diese E-Mail hilft uns jetzt nur zu testen, ob Rückmeldungen ankommen.`,
      wave: "Empfehlung:", // + the referral code, added by assets/app.js
    },

    creator: {
      headline: "Wer die App gebaut hat",
      source: "Quellcode ansehen",
      own: "Du hast selbst eine Lern-App veröffentlicht?",
      ownLink: "Trag sie ein",
    },
    back: "Alle Apps",
  },

  // ── Bauen: the creator's entry point to building an app with the tooling (site.tooling) ──────
  build: {
    title: "App bauen · lernapps.net",
    description:
      "Bau eine Lern-App mit deinem KI-Assistenten, auch ohne Programmierkenntnisse. Er plant mit dir, baut die App und prüft sie.",
    headline: "Bau eine Lern-App\nmit deinem KI-Assistenten.",
    lead:
      "Programmieren musst du nicht. Du sagst, was die App lehren soll. Dein Assistent plant mit dir, baut die App und prüft sie.",
    // Coming from a search (?thema=&fach=&klasse=, assets/bauen.js): {suche} are the words of find.searched.
    searched: "Du suchst etwas {suche}? Dann bau es, für dich und alle, die danach suchen.",
    // Who brings what: so that building feels doable, without promising too much.
    give: {
      headline: "Wer was mitbringt",
      items: [
        { who: "you", title: "Du bringst mit", body: "Was deine Lernenden brauchen: welcher Stoff drankommt, wo es hakt, welche Beispiele sie kennen." },
        { who: "ki", title: "Die KI bringt mit", body: "Das Fachwissen und das Programmieren. Sie plant mit dir, baut die App und prüft sie." },
        { who: "la", title: "lernapps.net bringt mit", body: "Vorlagen, Regeln und Prüfungen, damit die App gut wird. Und den Weg, sie mit anderen zu teilen." },
      ],
    },
    haveApp: "Du hast schon eine App?",
    haveAppLink: "Direkt zum Eintragen",
    start: {
      headline: "Sag deinem Assistenten:",
      body: "Du brauchst einen KI-Assistenten, der auf deinem Rechner Befehle ausführen darf. Kopier diesen Auftrag und gib ihn ihm.",
      label: "Auftrag für deinen Assistenten",
      // search: "" or " {suche}" (filled in by assets/bauen.js).
      prompt: (llms, command, search = "") =>
        `Bau mit mir eine Lern-App für lernapps.net${search}. Lies zuerst ${llms} und folge dem Schnellweg: Starte die App in einem neuen, leeren Ordner mit ${command} (für <name> ein kurzer Name ohne Leerzeichen). Frag mich dann, was die App lehren soll, und schreib mit mir den Plan. Erst wenn ich den Plan bestätigt habe, legst du die App an, wie der Plan es sagt.`,
      copy: "Auftrag kopieren",
      copied: "Kopiert",
      // Building is for the catalog; whoever wants to practise for a test with their own material goes to /practice/.
      practice: "Du willst für eine Arbeit mit deinem eigenen Material üben?",
      practiceLink: "Dann schau bei Üben",
    },
    which: {
      headline: "Welcher Assistent?",
      body: "Jeder Assistent geht, der Skills nutzen und Dateien ändern kann. Wir bauen selbst mit Claude Code. Auch ein sehr günstiges Modell baut schon gute Apps. Am meisten zählt aber, was du über dein Fach und deine Lernenden weißt.",
      link: "Welche Assistenten wir nutzen (auf Englisch)",
      linkLang: "en",
    },
    tools: {
      headline: "Was lernapps.net dir zum Bauen bereitstellt",
      body: "Anleitungen, Vorlagen für die Apps und Prüfungen, mit denen du leichter und schneller eine App baust, die auch andere gut nutzen können. Dein Assistent nutzt sie von selbst. Du kannst sie auch selbst nachlesen.",
      link: "Zu den Bauhilfen (auf Englisch)",
      linkLang: "en",
      github: "Deine App wird über GitHub veröffentlicht: kostenlos, öffentlich und unter deiner eigenen Adresse. GitHub musst du nicht kennen. Die Werkzeuge erledigen das meiste, und dein Assistent sagt dir, wenn du etwas klicken musst.",
      githubLink: "Was GitHub ist und wofür wir es nutzen (auf Englisch)",
    },
    free: {
      headline: "Lieber frei bauen?",
      body: "Du kannst deine App auch ohne unsere Vorlagen bauen: von Hand, mit einem anderen Framework oder mit Werkzeugen wie Lovable oder bolt.new. Gib dem Werkzeug dann",
      rulesLink: "die Regeln von lernapps.net (auf Englisch)",
      rulesLang: "en",
      rules: "mit, zum Beispiel als Wissen für das Projekt. Sie gelten für jede App, egal womit sie gebaut ist. Wichtig sind",
      criteriaLink: "die Bedingungen",
      check: "Wenn du die App einträgst, prüfen wir die veröffentlichte App genauso wie jede andere.",
    },
    next: {
      headline: "Und dann: raus in die Welt",
      body: "Deine App kann richtig gute Software für dich sein. Aber wenn die Welt davon erfahren soll, musst du sie veröffentlichen!",
      enterLink: "So veröffentlichst du deine App",
    },
  },

  // ── Eintragen (x-list-and-hear-back: s-listing-help, t-list-app, s-use-insight) ──────
  list: {
    title: "App eintragen · lernapps.net",
    description:
      "Deine Lern-App ist veröffentlicht? Trag sie in wenigen Minuten auf lernapps.net ein. Dann finden andere sie, und du erfährst, wenn sie geholfen hat.",
    headline: "Deine Lern-App ist veröffentlicht?\nTrag sie ein.",
    lead:
      "Das dauert ein paar Minuten. Danach finden Lehrkräfte und Eltern deine App. Und du erfährst, wenn sie geholfen hat.",
    noApp: "Noch keine App?",
    noAppLink: "So baust du eine mit deinem KI-Assistenten",
    criteria: {
      headline: "Was wir aufnehmen",
      items: [
        "Die App läuft im Browser, ohne Installation.",
        "Niemand braucht ein Konto.",
        "Sie ist kostenlos und ohne Werbung.",
        "Sie sammelt nichts heimlich: keine Analyse-Dienste, keine Werbe-Netzwerke. Fremde Server lädt sie höchstens nach einem Klick, zum Beispiel für ein Video.",
        "Lernende tun darin selbst etwas: ausprobieren, üben, entscheiden.",
        "Ihre Lizenz erlaubt eine Kopie (zum Beispiel MIT oder Apache 2.0 für den Code, CC BY 4.0 für Inhalte): lernapps.net liefert die App unter lernapps.net aus. Du bleibst die Urheberin oder der Urheber.",
      ],
    },
    fields: {
      headline: "Drei Angaben genügen",
      items: [
        { label: "Was lernt man damit?", hint: "Zwei, drei Sätze. Was tun die Lernenden?" },
        { label: "Für wen ist sie?", hint: "Fach und Klasse." },
        { label: "Wo ist sie zu finden?", hint: "Der Link zur App." },
      ],
      optional: "Wenn du magst: einzelne Themen mit eigenem Link. Dann landen Suchende direkt an der richtigen Stelle.",
    },
    // The ways, in this order: the assistant with the skill lernapps-listing (named in the prompt, site.tooling.listingRaw) is the way;
    // the issue form for those without such an assistant; the e-mail only as the fallback.
    flow: {
      headline: "So läuft das Eintragen ab",
      steps: [
        { who: "you", label: "Du & dein Assistent", title: "Ihr schlagt die App vor", body: "Dein Assistent öffnet einen Pull Request mit den drei Angaben." },
        { who: "auto", label: "automatisch", title: "Die Prüfung öffnet deine App", body: "An deiner Adresse, so wie Lernende sie öffnen. Fehlt etwas, steht es im Pull Request, und dein Assistent bessert nach." },
        { who: "team", label: "lernapps.net", title: "Wir sehen sie uns an", body: "Passt alles, nehmen wir die App auf." },
        { who: "auto", label: "automatisch", title: "Die Kopie entsteht", body: "Aus genau deinem Stand, noch einmal geprüft, auf lernapps.net." },
        { who: "team", label: "lernapps.net", title: "Andere finden sie", body: "Der Katalog verlinkt die Kopie und dein Repository als Quellcode." },
      ],
      after: "Neue Versionen übernimmt lernapps.net danach von selbst.",
      afterLink: "Warum es eine Kopie gibt",
    },
    own: {
      headline: "Deine App bleibt deine",
      intro:
        "Deine App bleibt an deiner eigenen Adresse, zum Beispiel auf GitHub Pages. Steht sie im Katalog, liefert lernapps.net zusätzlich eine Kopie aus, unter lernapps.net/apps/start/ und dem Namen deiner App. Diese Kopie öffnen Lernende.",
      items: [
        {
          title: "Wir nehmen dir nichts weg.",
          body: "Repository, Lizenz und deine Adresse bleiben bei dir. Du bleibst die Urheberin oder der Urheber, und der Katalog verlinkt dein Repository als Quellcode.",
        },
        {
          title: "Wir nehmen dir das Regulatorische ab.",
          body: "Schulen fragen, wer eine App betreibt und was mit den Daten geschieht. Für die Kopie antwortet lernapps.net: ein Anbieter, eine Datenschutzerklärung, ein Impressum. Und die Adresse bleibt, auch wenn deine App einmal umzieht.",
        },
        {
          title: "Die Kopie ist deine App.",
          body: "Wir bauen sie aus genau dem Stand, den du veröffentlicht hast, und prüfen sie, bevor Lernende sie sehen. Wir ändern nichts daran.",
        },
        {
          title: "Neue Versionen kommen von selbst.",
          body: "Veröffentlichst du eine neue Version, übernimmt lernapps.net sie in der Regel innerhalb einer Stunde. Updates der Werkzeuge gehen allein durch; geänderte Inhalte sehen wir uns vorher an.",
        },
      ],
    },
    ways: {
      headline: "So trägst du sie ein",
      agent: {
        title: "Mit deinem KI-Assistenten",
        body:
          "So geht es am schnellsten. Du brauchst einen KI-Assistenten, der auf deinem Rechner Befehle ausführen darf, und ein GitHub-Konto. Kopier diesen Auftrag und gib ihn ihm.",
        prompt: (skill, install) =>
          `Trag meine Lern-App auf lernapps.net ein. Nutz dazu den Skill lernapps-listing (${skill}, laden mit ${install}) und folge ihm. Prüf zuerst, ob die App die Bedingungen erfüllt. Hier ist der Link zu meiner App: `,
        label: "Auftrag für deinen Assistenten",
        copy: "Auftrag kopieren",
        copied: "Kopiert",
      },
      form: {
        title: "Ohne Assistenten: mit dem Formular",
        body: "Füll das Formular auf GitHub aus. Wir prüfen die App und tragen sie für dich ein. Dafür brauchst du ein GitHub-Konto.",
        button: "Zum Formular",
      },
      mail: {
        title: "Klappt nichts davon?",
        before: "Dann schick uns den Link zu deiner App",
        link: "per E-Mail",
        after: "Oliver hilft dir beim ersten Eintrag.",
        subject: "Meine App für lernapps.net",
      },
    },
    back: {
      headline: "Was du zurückbekommst",
      body:
        "Jedes Danke und jede Rückmeldung zu deiner App geben wir an dich weiter. Später zählen wir sie offen, als Summe, auf der Seite deiner App. Wer geklickt hat, wissen wir dann nicht. Und wir wollen es auch nicht wissen.",
    },
  },
};

// The prepared e-mails of the app page, one per button: { label, subject, body }.
export function addMails(texts) {
  const T = texts.app.thanks;
  const M = texts.app.mail;
  texts.app.mails = {
    thanks: (app, creator, page) => [
      { label: `♥ ${T.thank}`, subject: M.thanksSubject(app), body: M.thanksBody(app, creator, page) },
    ],
    used: (app, page) =>
      T.used.map((u) => ({ label: u.label, subject: M.usedSubject(app, u.label), body: M.feedbackBody(M.usedSubject(app, u.label), page) })),
    feedback: (app, page) =>
      T.feedback.map((f) => ({ label: f.label, subject: M.feedbackSubject(app, f.label), body: M.feedbackBody(M.feedbackSubject(app, f.label), page) })),
  };
}
addMails(de);

export default de;
