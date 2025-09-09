const geek = document.getElementById('geek');
const scoreEl = document.getElementById('score');
let score = 0;

function moveGeek() {
  const container = document.getElementById('game-container');
  const maxX = container.clientWidth - geek.clientWidth;
  const maxY = container.clientHeight - geek.clientHeight;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  geek.style.left = x + 'px';
  geek.style.top = y + 'px';
}

geek.addEventListener('click', () => {
  score++;
  scoreEl.textContent = score;
  moveGeek();
  geek.style.transform = 'scale(1.2)';
  setTimeout(() => geek.style.transform = 'scale(1)', 100);
});

moveGeek();
