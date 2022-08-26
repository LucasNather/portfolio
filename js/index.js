let imgPerfil = document.querySelector('#foto-perfil')
let imgOutraPerfil = document.querySelector('#outra-foto-perfil')

let url = "https://api.github.com/users/lucasnather"

fetch(url)
.then(res => res.json())
.then(data => {
    imgPerfil.setAttribute('src', data.avatar_url)
    imgOutraPerfil.setAttribute('src', data.avatar_url)
})

console.log(imgPerfil)
