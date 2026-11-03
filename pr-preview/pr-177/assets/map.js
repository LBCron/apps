// The pages of the learning map (src/map*.njk). Without this script everything is a link and works: the curricula
// are links, every competency leads to its page, every term to its definition, and all competencies show. This
// script only
// - shows the drop-down "Wann ist was dran?" instead of the links and goes to the chosen curriculum's page,
// - shows "Nur Lücken zeigen", which hides the competencies an app already practises,
// - opens a competency's details (a <template> on the page) or a term's definition in a dialog instead of leaving
//   the page; the dialog closes with its button, Escape or a click beside it, and the focus goes back.
// Nothing is stored in the browser, nothing is sent anywhere.

// The drop-down: the address of each curriculum's page is its value.
const when = document.querySelector("[data-map-when]");
const select = when?.querySelector("select");
if (when && select) {
  when.hidden = false;
  document.querySelector("[data-map-when-links]")?.setAttribute("hidden", "");
  select.addEventListener("change", () => {
    if (select.value !== select.dataset.current) location.assign(select.value);
  });
  // Back from the next page (back/forward cache): show the curriculum of this page again.
  addEventListener("pageshow", () => {
    select.value = select.dataset.current;
  });
}

// Only gaps: hides every competency an app practises.
const gaps = document.querySelector("[data-map-gaps]");
const gapsBox = gaps?.querySelector("input");
if (gaps && gapsBox) {
  gaps.hidden = false;
  const apply = () => document.querySelectorAll("li[data-covered]").forEach((li) => (li.hidden = gapsBox.checked));
  gapsBox.addEventListener("change", apply);
  apply();
}

// The dialog: filled from the element a link names in data-opens (a <template> or a definition on the page).
const dialog = document.querySelector("[data-map-dialog]");
let opener = null;

function open(id, from) {
  const source = document.getElementById(id);
  if (!dialog || !source || typeof dialog.showModal !== "function") return false;
  const root = source.content ?? source;
  const title = root.querySelector("[data-dialog-title]");
  const body = root.querySelector("[data-dialog-body]");
  if (!title || !body) return false;
  dialog.querySelector("[data-dialog-kind]").textContent = source.dataset.kind ?? "";
  const heading = dialog.querySelector("[data-dialog-heading]");
  heading.textContent = title.textContent;
  if (title.lang) heading.lang = title.lang;
  else heading.removeAttribute("lang");
  const copy = body.cloneNode(true);
  copy.querySelectorAll("[id]").forEach((element) => element.removeAttribute("id"));
  dialog.querySelector("[data-dialog-content]").replaceChildren(...copy.childNodes);
  opener = from;
  dialog.showModal();
  return true;
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-opens]");
  if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  if (open(link.dataset.opens, link)) event.preventDefault();
});

if (dialog) {
  dialog.querySelector("[data-dialog-close]")?.addEventListener("click", () => dialog.close());
  // A click on the backdrop reaches the dialog itself; a click inside reaches its content.
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => {
    opener?.focus();
    opener = null;
  });
}
