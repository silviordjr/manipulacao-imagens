export default function changeQuote (time) {
    const quotes = document.querySelectorAll('.depoimento')

    if (quotes){
        let ativo 
    
        setInterval(() => {
            quotes.forEach((quote, index) => {
                if(quote.classList.contains('ativo')){
                    ativo = index
                    quote.classList.remove('ativo')
                }
            })

            if (ativo === quotes.length - 1){
                quotes[0].classList.add('ativo')
            } else {
                quotes[ativo + 1].classList.add('ativo')
            }
        }, time)   
    }
}