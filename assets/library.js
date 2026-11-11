'use strict';
(() => {
  const search = document.getElementById('library-search');
  const cards = [...document.querySelectorAll('.book-card')];
  const pills = [...document.querySelectorAll('.filter-pill')];
  const status = document.getElementById('results-label');
  const empty = document.getElementById('empty-state');
  const clear = document.getElementById('clear-filters');
  if (!search || !cards.length) return;
  let category = 'all';
  function update() {
    const needle = search.value.trim().toLocaleLowerCase();
    let count = 0;
    for (const card of cards) {
      const matchesCategory = category === 'all' || card.dataset.category === category;
      const matchesSearch = !needle || (card.dataset.search + ' ' + card.textContent).toLocaleLowerCase().includes(needle);
      const show = matchesCategory && matchesSearch;
      card.hidden = !show;
      if (show) count++;
    }
    status.textContent = `Showing ${count} free ${count === 1 ? 'guide' : 'guides'}`;
    empty.hidden = count !== 0;
  }
  for (const pill of pills) {
    pill.addEventListener('click', () => {
      category = pill.dataset.filter || 'all';
      for (const other of pills) {
        const selected = other === pill;
        other.classList.toggle('active', selected);
        other.setAttribute('aria-pressed', String(selected));
      }
      update();
    });
  }
  search.addEventListener('input', update);
  if (clear) clear.addEventListener('click', () => {
    search.value = '';
    pills[0]?.click();
    search.focus();
  });
  update();
})();
