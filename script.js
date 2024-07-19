document.addEventListener('scroll', () => {
    const shoot = document.getElementById('shoot');
    const first = document.getElementById('first');
    
    if (window.scrollY > first.offsetHeight) {
        shoot.classList.add('scrolled');
  } else {
    shoot.classList.remove('scrolled');
  }
})