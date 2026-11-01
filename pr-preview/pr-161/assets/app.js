// App page: the prepared e-mails for thanks and feedback (MVP, platform design D5 ch-feedback, D8) and a
// gentle reminder after coming back from the app. The links work without JS; this script only
// - adds the referral code of a wave (?welle=<code>) to the e-mail, so a wave's use can be told apart,
// - says what happens after a click,
// - reminds once, when this tab is visible again after the app was opened in another tab.
// Nothing is stored in the browser, nothing is sent from here.
const thanks = document.querySelector("[data-thanks]");
const opened = thanks?.querySelector("[data-opened]");
const waveText = thanks?.dataset.waveText ?? "";
const reminder = document.querySelector("[data-reminder]");
const waveParam = new URLSearchParams(location.search).get("welle") ?? "";
const wave = /^[a-z0-9-]{1,32}$/.test(waveParam) ? waveParam : null;

document.querySelectorAll("[data-mail]").forEach((link) => {
  if (wave) {
    const url = new URL(link.href);
    const body = url.searchParams.get("body") ?? "";
    // Rebuild by hand: URLSearchParams would encode spaces as "+", which mail programs show literally.
    const subject = url.searchParams.get("subject") ?? "";
    link.href = `mailto:${url.pathname}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${body}\n\n${waveText} ${wave}`)}`;
  }
  link.addEventListener("click", () => {
    if (opened) opened.textContent = opened.dataset.text;
    if (reminder) reminder.hidden = true;
  });
});

let leftForApp = false;
let reminded = false;
document.querySelector("[data-open]")?.addEventListener("click", () => (leftForApp = true));
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "visible" || !leftForApp || reminded || !reminder) return;
  reminded = true;
  reminder.hidden = false;
});
reminder?.querySelector("a")?.addEventListener("click", () => (reminder.hidden = true));
