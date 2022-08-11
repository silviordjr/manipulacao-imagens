export default function getActivePage () {
    const camping = document.querySelector('#camping')
    const contato = document.querySelector('#contato')
    const equipe = document.querySelector('#equipe')
    const eventos = document.querySelector('#eventos')
    const hostel = document.querySelector('#hostel')

    if (camping) {
        const menu = document.querySelector('#menu-camping')
        menu.classList.add('ativo')
    } else if (contato) {
        const menu = document.querySelector('#menu-contato')
        menu.classList.add('ativo')
    } else if (equipe) {
        const menu = document.querySelector('#menu-equipe')
        menu.classList.add('ativo')
    } else if (eventos) {
        const menu = document.querySelector('#menu-eventos')
        menu.classList.add('ativo')
    } else if (hostel) {
        const menu = document.querySelector('#menu-hostel')
        menu.classList.add('ativo')
    }
}