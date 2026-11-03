// Search on the find page. Filters the cards by topic text, subject and grade, and shows the topics of
// each app that match, with a deep link into the app. The search is kept in the URL (?thema=&fach=&klasse=)
// so it can be shared or bookmarked. Nothing is stored in the browser, nothing is sent anywhere.
const form = document.querySelector("[data-search-form]");
const cards = [...document.querySelectorAll("[data-app]")];
const count = document.querySelector("[data-count]");
const empty = document.querySelector("[data-empty]");

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
    empty.hidden = shown > 0;

    const next = new URLSearchParams();
    if (thema.value.trim()) next.set("thema", thema.value.trim());
    if (fach.value) next.set("fach", fach.value);
    if (klasse.value) next.set("klasse", klasse.value);
    const query = next.toString();
    history.replaceState(null, "", query ? `?${query}` : location.pathname);
  };

  form.addEventListener("input", apply);
  form.addEventListener("submit", (e) => e.preventDefault());
  apply();
}
