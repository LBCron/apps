// Copy buttons for read-only fields ([data-copy]). Without JS (or without clipboard access) the
// button stays hidden and the text can be selected by hand. Nothing is stored.
document.querySelectorAll("[data-copy]").forEach((box) => {
  const field = box.querySelector("input, textarea");
  const button = box.querySelector("[data-copy-button]");
  if (!field || !button || !navigator.clipboard) return;
  const label = button.textContent;
  button.hidden = false;
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(field.value);
      button.textContent = button.dataset.done;
      setTimeout(() => (button.textContent = label), 2000);
    } catch {
      field.select();
    }
  });
  field.addEventListener("focus", () => field.select());
});
