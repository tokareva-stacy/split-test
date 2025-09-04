document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.img-wrapper');
  const before = wrapper.querySelector('.before-wrapper');
  const after  = wrapper.querySelector('.after-wrapper');
  const handle = wrapper.querySelector('.slider-handle');

  let dragging = false;

  function setPos(clientX) {
    const r = wrapper.getBoundingClientRect();
    let x = Math.max(0, Math.min(clientX - r.left, r.width));
    const p = (x / r.width) * 100;

    before.style.clipPath = `inset(0 ${100 - p}% 0 0)`;
    after.style.clipPath  = `inset(0 0 0 ${p}%)`;

    handle.style.left = `${p}%`;
  }

  const down = e => {
    dragging = true;
    setPos(e.touches ? e.touches[0].clientX : e.clientX);
    e.preventDefault();
  };
  const move = e => {
    if (!dragging) return;
    if (e.touches) e.preventDefault();
    setPos(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const up = () => dragging = false;

  handle.addEventListener('mousedown', down);
  handle.addEventListener('touchstart', down, { passive: false });
  document.addEventListener('mousemove', move);
  document.addEventListener('touchmove', move, { passive: false });
  document.addEventListener('mouseup', up);
  document.addEventListener('touchend', up);

  wrapper.addEventListener('click', e => setPos(e.clientX));
});

function setPos(clientX) {
  const r = wrapper.getBoundingClientRect();
  let x = Math.max(0, Math.min(clientX - r.left, r.width));
  const p = (x / r.width) * 100;

  before.style.clipPath = `inset(0 ${100 - p}% 0 0)`;

  after.style.clipPath  = `inset(0 0 0 ${p}%)`;

  handle.style.left = `${p}%`;
}
