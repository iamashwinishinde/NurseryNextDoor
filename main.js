
  //for explore

  document.querySelector('.explore')?.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.getElementById('why-choose-us');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // for newsletter
 (function () {
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('newsletter-email');
    const feedbackEl = document.getElementById('newsletter-feedback');
    const STORAGE_KEY = 'nursery_newsletter_email';

    function showMessage(msg, success = true) {
      feedbackEl.textContent = msg;
      feedbackEl.style.color = success ? '#d4ffd6' : '#ffcccc';
      setTimeout(() => {
        // fade out
        feedbackEl.textContent = '';
      }, 5000);
    }

    // prefill if already subscribed
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      showMessage('You are already subscribed with ' + saved + '.', true);
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      if (!email) {
        showMessage('Email is required.', false);
        return;
      }
      // simple validation
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email)) {
        showMessage('Enter a valid email address.', false);
        return;
      }
      // simulate subscription
      localStorage.setItem(STORAGE_KEY, email);
      showMessage('Subscribed! Thanks 😊');
      form.reset();
    });
  })();


// for FAQ section
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        faqItems.forEach(i => {
          if (i !== item) i.classList.remove('active');
        });

        item.classList.toggle('active');
      });
    });
   
