const paneles = document.querySelectorAll('.panel')

paneles.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('activo')
    })
})

function removeActiveClasses() {
    paneles.forEach(panel => {
        panel.classList.remove('activo')
    })
}