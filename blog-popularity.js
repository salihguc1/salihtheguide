(() => {
  const list = document.querySelector(".post-list[data-click-counter]");
  const base = list?.dataset.clickCounter;
  if (!base || !/^https:\/\/[a-z0-9.-]+\/?$/i.test(base)) return;

  const endpoint = base.replace(/\/$/, "");
  const cards = Array.from(list.querySelectorAll("[data-post-slug]"));

  const record = (event) => {
    const card = event.target.closest("[data-post-slug]");
    if (event.defaultPrevented || !card || !list.contains(card) || !event.isTrusted) return;
    fetch(endpoint + "/click/" + encodeURIComponent(card.dataset.postSlug), {
      method: "POST",
      keepalive: true,
      credentials: "omit",
      referrerPolicy: "no-referrer",
    }).catch(() => {});
  };
  list.addEventListener("click", record);
  list.addEventListener("auxclick", (event) => {
    if (event.button === 1) record(event);
  });

  fetch(endpoint + "/counts", {credentials: "omit", referrerPolicy: "no-referrer"})
    .then((response) => {
      if (!response.ok) throw new Error("Click counts unavailable");
      return response.json();
    })
    .then((counts) => {
      if (!counts || Array.isArray(counts) || typeof counts !== "object") return;
      const clicks = (card) => {
        const count = Object.hasOwn(counts, card.dataset.postSlug) ? counts[card.dataset.postSlug] : 0;
        return Number.isSafeInteger(count) && count > 0 ? count : 0;
      };
      cards.sort((a, b) => clicks(b) - clicks(a));
      cards.forEach((card, index) => {
        const current = list.children[index];
        if (current !== card) list.insertBefore(card, current);
      });
    })
    .catch(() => {});
})();
