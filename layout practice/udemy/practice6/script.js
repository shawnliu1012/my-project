const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        // parebtNode父節點
        toggle.parentNode.classList.toggle('active')
    })
})