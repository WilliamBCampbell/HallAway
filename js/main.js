(() => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }

  const form = document.querySelector('.contact-form');
  const note = document.getElementById('form-note');

  if (form && note) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        note.textContent = 'Please complete all fields before sending.';
        note.style.color = '#d32f2f';
        return;
      }

      note.textContent = 'Thanks! Your request is ready. Please call or email us to confirm details.';
      note.style.color = '#1b2b48';
      form.reset();
    });
  }
})();
