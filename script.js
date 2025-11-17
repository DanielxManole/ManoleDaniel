window.addEventListener("scroll", function() {
  const button = document.getElementById("back-to-top");
  if (window.scrollY > 100) { 
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("back-to-top");
  button.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.addEventListener('DOMContentLoaded', () => {

    const parolaInput = document.getElementById('parola');
    const confirmareInput = document.getElementById('confirmare_parola');

    if (parolaInput && confirmareInput) {
        
        const mesajEroare = document.createElement('p');
        mesajEroare.id = 'parola-mesaj';
        mesajEroare.style.color = '#D32F2F';
        mesajEroare.style.fontSize = '14px';
        mesajEroare.style.marginTop = '5px';
        
        confirmareInput.parentNode.insertBefore(mesajEroare, confirmareInput.nextSibling);

        const valideazaParole = () => {
            if (parolaInput.value.length > 0 && confirmareInput.value.length > 0) {
                if (parolaInput.value !== confirmareInput.value) {
                    mesajEroare.textContent = 'Parolele nu se potrivesc!';
                    confirmareInput.style.borderColor = '#D32F2F';
                } else {
                    mesajEroare.textContent = 'Parolele se potrivesc!';
                    mesajEroare.style.color = '#388E3C';
                    confirmareInput.style.borderColor = '#388E3C';
                }
            } else {
                mesajEroare.textContent = '';
                confirmareInput.style.borderColor = '#ccc';
            }
        };

        parolaInput.addEventListener('keyup', valideazaParole);
        confirmareInput.addEventListener('keyup', valideazaParole);
    }
});

document.addEventListener('DOMContentLoaded', () => {

    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        const submitBtn = document.getElementById('contact-submit-btn');
        const successMsg = document.getElementById('contact-success');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            submitBtn.textContent = 'Se trimite...';
            submitBtn.disabled = true;

            setTimeout(() => {
                successMsg.textContent = 'Mesaj trimis! Îți vom răspunde în curând.';
                successMsg.style.display = 'block';

                submitBtn.textContent = 'Trimite Mesajul';
                submitBtn.disabled = false;
                contactForm.reset();

                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 5000);

            }, 1500);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {

    const parolaInput = document.getElementById('parola');
    const confirmareInput = document.getElementById('confirmare_parola');

    if (parolaInput && confirmareInput) {}

    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {}

    const cookieBanner = document.getElementById('cookie-banner');
    const cookieAcceptBtn = document.getElementById('cookie-accept-btn');

    if (cookieBanner && cookieAcceptBtn) {
        
        if (localStorage.getItem('cookieConsentGiven') !== 'true') {
            cookieBanner.classList.add('show');
        }

        cookieAcceptBtn.addEventListener('click', () => {
            cookieBanner.style.transform = 'translateY(100%)';
            localStorage.setItem('cookieConsentGiven', 'true');
            
            setTimeout(() => {
                cookieBanner.style.display = 'none';
            }, 500);
        });
    }

});