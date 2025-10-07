document.addEventListener('DOMContentLoaded', () => {
  const last = document.querySelector('[data-last-modified]');
  if (last) {
    const lm = document.lastModified || '';
    last.textContent = lm ? lm : '';
  }
});
