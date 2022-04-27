/* abre e fecha menu quando clicar no icone */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll("nav .toggle")

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/* Quando clicar em um icone do menu, esconder menu */

