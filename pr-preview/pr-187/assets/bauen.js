// The search from the find page (?thema=&fach=&klasse=, set by assets/finden.js) on the page /build/: a line under the
// lead and the same words in the task for the assistant. Values from the address are only ever set as text, never as
// HTML, and kept short. Without a search the page stays as it is. Nothing is stored, nothing is sent anywhere.
const line = document.querySelector("[data-searched]");
const prompt = document.querySelector("[data-prompt]");
const params = new URLSearchParams(location.search);
const value = (name, max) => (params.get(name) ?? "").replace(/\s+/g, " ").trim().slice(0, max);
const thema = value("thema", 80);
const fach = value("fach", 40);
const klasse = /^(?:[1-9]|1[0-3])$/.test(value("klasse", 2)) ? value("klasse", 2) : "";

if (line && prompt && (thema || fach || klasse)) {
  const d = line.dataset;
  const searched = [
    thema && d.topic.replace("{v}", () => thema),
    fach && d.subject.replace("{v}", () => fach),
    klasse && d.grade.replace("{v}", () => klasse),
  ].filter(Boolean).join(" ");
  line.textContent = d.searched.replace("{suche}", () => searched);
  line.hidden = false;
  const field = prompt.querySelector("textarea, input");
  if (field) field.value = prompt.dataset.prompt.replace("{suche}", () => searched);
}
