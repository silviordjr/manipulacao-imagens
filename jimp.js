const Jimp = require ("jimp")
const fs = require ("fs")

// Jimp.read('imagens/')
// .then((img) => {
//     console.log(img)
//     // img.resize(50, 50).write('imagem_resize.jpg')
// })
// .catch((err) => {
//     console.log(err)
// })

const pasta = fs.readdirSync('./imagens/')

pasta.forEach((imagem, index) => {
    Jimp.read(`imagens/${imagem}`)
    .then((img) => {
        img.resize(980, 1400).write(`otimizadas/img_${index}_grande.jpg`)
    })
})

pasta.forEach((imagem, index) => {
    Jimp.read(`imagens/${imagem}`)
    .then((img) => {
        img.greyscale().write(`otimizadas/img_${index}_grey.jpg`)
    })
})

pasta.forEach((imagem, index) => {
    Jimp.read(`imagens/${imagem}`)
    .then((img) => {
        img.cover(50,50).write(`otimizadas/img_${index}_thumb.jpg`)
    })
})