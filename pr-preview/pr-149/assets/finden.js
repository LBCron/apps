// Search on the find page. Filters the cards by topic text, subject and grade, and shows the topics of
// each app that match, with a deep link into the app. The search is kept in the URL (?thema=&fach=&klasse=)
// so it can be shared or bookmarked. Nothing is stored in the browser, nothing is sent anywhere.
const form = document.querySelector("[data-search-form]");
const cards = [...document.querySelectorAll("[data-app]")];
const count = document.querySelector("[data-count]");
const empty = document.querySelector("[data-empty]");
const emptyHeadline = document.querySelector("[data-empty-headline]");
const hint = document.querySelector("[data-hint]");
const buildBox = document.querySelector("[data-build]");
const buildLinks = [...document.querySelectorAll("[data-build-link]")];
const emptyDefault = emptyHeadline?.textContent;

// Lower case, without accents and umlaut dots, so "zurück" finds "Zurücklegen" and "zuruck" too.
const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ß/g, "ss");

if (form) {
  form.hidden = false;
  const { thema, fach, klasse } = form.elements;
  const params = new URLSearchParams(location.search);
  thema.value = params.get("thema") ?? "";
  fach.value = params.get("fach") ?? "";
  klasse.value = params.get("klasse") ?? "";

  const apply = () => {
    const words = norm(thema.value).split(/\s+/).filter(Boolean);
    let shown = 0;
    for (const card of cards) {
      const topics = [...card.querySelectorAll("[data-topic]")];
      const matchingTopics = topics.filter((t) => words.length && words.every((w) => norm(t.dataset.search).includes(w)));
      const text = norm(card.dataset.search + " " + topics.map((t) => t.dataset.search).join(" "));
      const ok =
        words.every((w) => text.includes(w)) &&
        (!fach.value || card.dataset.subject === fach.value) &&
        (!klasse.value || card.dataset.grades.split(" ").includes(klasse.value));
      card.hidden = !ok;
      topics.forEach((t) => (t.hidden = !matchingTopics.includes(t)));
      const box = card.querySelector("[data-topics]");
      if (box) box.hidden = !ok || matchingTopics.length === 0;
      if (ok) shown++;
    }
    count.textContent = shown === 0 ? count.dataset.none : shown === 1 ? count.dataset.one : count.dataset.many.replace("{n}", shown);
    // The invitation to build: one line with a search and matches, the honest box without a match.
    const subject = fach.value ? fach.selectedOptions[0].textContent.trim() : "";
    const searching = Boolean(thema.value.trim() || fach.value || klasse.value);
    empty.hidden = shown > 0;
    hint.hidden = !searching || shown === 0;
    buildBox.hidden = shown === 0;
    const d = emptyHeadline.dataset;
    const searched = [
      thema.value.trim() && d.topic.replace("{v}", () => thema.value.trim()),
      subject && d.subject.replace("{v}", () => subject),
      klasse.value && d.grade.replace("{v}", () => klasse.value),
    ].filter(Boolean).join(" ");
    const headline = searched ? d.searched.replace("{suche}", () => searched) : emptyDefault;
    emptyHeadline.textContent = headline.charAt(0).toUpperCase() + headline.slice(1);

    const next = new URLSearchParams();
    if (thema.value.trim()) next.set("thema", thema.value.trim());
    if (fach.value) next.set("fach", fach.value);
    if (klasse.value) next.set("klasse", klasse.value);
    const query = next.toString();
    history.replaceState(null, "", query ? `?${query}` : location.pathname);

    // The search goes along to /build/ (assets/bauen.js), with the subject in the words of this page.
    const build = new URLSearchParams(next);
    if (subject) build.set("fach", subject);
    const buildQuery = build.toString();
    for (const link of buildLinks) {
      const url = new URL(link.href);
      url.search = buildQuery;
      link.href = url.href;
    }
  };

  form.addEventListener("input", apply);
  form.addEventListener("submit", (e) => e.preventDefault());
  apply();
}
