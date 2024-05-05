// change navbar styles on scroll
window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle
    ('window-scroll', window.scrollY > 100)
})