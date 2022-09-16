document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        card.classList.toggle('flip')
    })
})