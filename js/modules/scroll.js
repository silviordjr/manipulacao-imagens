export const initAnimacaoScroll = () => {
    const sections = document.querySelectorAll('.js-scroll')

    if (sections.length){
        const windowHeight = window.innerHeight * 0.8

        const animaScroll = () => {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - windowHeight
                if (sectionTop < 0){
                    section.classList.add('ativo')
                } else if (section.classList.contains('ativo')) {
                    section.classList.remove('ativo')
                }
            })
        }

        animaScroll()
        window.addEventListener('scroll', animaScroll)
    }

}