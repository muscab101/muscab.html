let bar = document.getElementById('bar')
let nav = document.getElementById('navbar')
let close = document.getElementById('close')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}



if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}



// user page

const container = document.getElementById('container');
document.getElementById('signUp').addEventListener('click', () =>
  container.classList.add("right-panel-active")
);
document.getElementById('signIn').addEventListener('click', () =>
  container.classList.remove("right-panel-active")
);

// Basic form validation on signup
document.getElementById('signup-form').addEventListener('submit', e => {
  e.preventDefault();
  const pw = e.target.password.value;
  const pw2 = e.target.password2.value;
  if (pw !== pw2) return alert('Passwords do not match!');
  alert(`Signed up with ${e.target.email.value}`);
});

// Basic handling for login
document.getElementById('login-form').addEventListener('submit', e => {
  e.preventDefault();
  alert(`Logged in with ${e.target.email.value}!`);
});


// about page
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let idx = 0;

function showSlide(i) {
  slides.forEach(s => s.classList.remove('active'));
  slides[i].classList.add('active');
}

prev.addEventListener('click', () => {
  idx = (idx - 1 + slides.length) % slides.length;
  showSlide(idx);
});

next.addEventListener('click', () => {
  idx = (idx + 1) % slides.length;
  showSlide(idx);
});

// Initialize
showSlide(idx);
