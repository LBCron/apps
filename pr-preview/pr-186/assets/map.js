// The pages of the learning map (src/map*.njk). Without this script everything is a link and works: the curricula
// are links, every competency leads to its page, every term to its definition, and all competencies show. This
// script only
// - shows the drop-down "Wann ist was dran?" instead of the links and goes to the chosen curriculum's page,
// - turns the legend of a subject map into two buttons: one shows only the competencies an app practises, the other
//   only the gaps; pressing the pressed one again shows all,
// - opens a competency's details (a <template> on the page), a term's definition or the help of a subject map in a
//   dialog instead of leaving the page; the dialog closes with its button, Escape or a click beside it, and the focus goes back,
// - shows a term's definition as a tooltip when a box of the picture is pointed at or gets the focus (WCAG 1.4.13: it
//   stays while pointed at, Escape hides it),
// - closes the list of terms unless the address points into it, and opens it when a link does.
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

// The help of a subject map: a dialog (opened by the link beside the headline), so not at the end of the page.
document.querySelector("[data-map-help]")?.setAttribute("hidden", "");

// The legend as a filter: "covered" or "gap" shows only that kind, null shows all.
const filter = document.querySelector("[data-map-filter]");
if (filter) {
  filter.hidden = false;
  document.querySelector("[data-map-legend]")?.setAttribute("hidden", "");
  const buttons = [...filter.querySelectorAll("button[data-show]")];
  let only = null;
  const apply = () => {
    for (const button of buttons) {
      button.setAttribute("aria-pressed", String(button.dataset.show === only));
      button.toggleAttribute("data-dimmed", only !== null && button.dataset.show !== only);
    }
    document.querySelectorAll(".map-cell > li").forEach((li) => {
      const kind = li.hasAttribute("data-covered") ? "covered" : "gap";
      li.hidden = only !== null && kind !== only;
    });
  };
  for (const button of buttons) {
    button.addEventListener("click", () => {
      only = only === button.dataset.show ? null : button.dataset.show;
      apply();
    });
  }
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

// The tooltip of the picture's boxes: the first paragraph of the term's definition, placed below the box (above when
// there is no room) and kept in the window; it follows the box when the page or the frame scrolls. It is fixed to the
// window, so the scrolling frame does not cut it.
const tip = document.querySelector("[data-map-tip]");
if (tip) {
  let current = null;
  let leaving = 0;
  const hide = () => {
    clearTimeout(leaving);
    if (!current) return;
    current.removeAttribute("aria-describedby");
    current = null;
    tip.hidden = true;
  };
  const show = (node) => {
    clearTimeout(leaving);
    if (current === node) return;
    hide();
    const text = document.getElementById(node.dataset.opens)?.querySelector("[data-dialog-body] > p");
    if (!text) return;
    const more = document.createElement("span");
    more.className = "map-tip-more";
    more.textContent = tip.dataset.more;
    tip.replaceChildren(text.textContent, more);
    tip.hidden = false;
    node.setAttribute("aria-describedby", tip.id);
    current = node;
    place();
  };
  const place = () => {
    if (!current) return;
    const box = current.getBoundingClientRect();
    const width = tip.offsetWidth;
    const left = Math.min(Math.max(8, box.left + box.width / 2 - width / 2), innerWidth - width - 8);
    const below = box.bottom + 8;
    const top = below + tip.offsetHeight > innerHeight - 8 ? box.top - tip.offsetHeight - 8 : below;
    tip.style.left = `${left}px`;
    tip.style.top = `${Math.max(8, top)}px`;
  };
  const leave = () => {
    clearTimeout(leaving);
    leaving = setTimeout(hide, 200);
  };
  for (const node of document.querySelectorAll(".map-model a.map-node[data-opens]")) {
    node.addEventListener("pointerenter", (event) => event.pointerType !== "touch" && show(node));
    node.addEventListener("pointerleave", leave);
    node.addEventListener("focus", () => node.matches(":focus-visible") && show(node));
    node.addEventListener("blur", hide);
    node.addEventListener("click", hide);
  }
  tip.addEventListener("pointerenter", () => clearTimeout(leaving));
  tip.addEventListener("pointerleave", leave);
  addEventListener("keydown", (event) => event.key === "Escape" && hide());
  addEventListener("scroll", place, { passive: true, capture: true });
  addEventListener("resize", place);
}

// The list of terms: open without JavaScript; closed here unless the address points into it, opened by a link to it.
const terms = document.querySelector("[data-map-terms]");
if (terms) {
  const target = () => {
    const id = decodeURIComponent(location.hash.slice(1));
    const element = id && document.getElementById(id);
    return element && terms.contains(element) ? element : null;
  };
  if (!target()) terms.open = false;
  addEventListener("hashchange", () => {
    const element = target();
    if (!element) return;
    terms.open = true;
    element.scrollIntoView();
  });
}
