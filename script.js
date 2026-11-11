const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filter.active').classList.remove('active');
    button.classList.add('active');
    const category = button.dataset.filter;
    document.querySelectorAll('.menu-card').forEach(card => {
      card.hidden = category !== 'all' && card.dataset.category !== category;
    });
  });
});

const dateInput = document.getElementById('bookingDate');
const today = new Date();
dateInput.min = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

document.getElementById('bookingForm').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  document.getElementById('formMessage').textContent =
    `Rahmat, ${data.get('name')}! ${data.get('date')} sanasi uchun ${data.get('guests')} kishilik stol bo‘yicha so‘rovingiz tayyor. Bu demo shakl, haqiqiy band qilish uchun telefon orqali bog‘laning.`;
  event.currentTarget.reset();
  dateInput.min = new Date().toISOString().slice(0, 10);
});
