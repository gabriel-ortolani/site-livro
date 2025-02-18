let lista = document.querySelectorAll('.img');
let lista2 = document.querySelectorAll('.titulo');
let lista3 = document.querySelectorAll('.txt');
let next = document.getElementById('depois');
let prev = document.getElementById('antes');
let contar = lista.length;
let contar2 = lista2.length;
let contar3 = lista3.length;
let ativo = 0;
let ativo2 = 0;
let ativo3 = 0;
const imagem = document.querySelector(".ativo2");

// n° vol.
next.onclick = () =>{
    let desativar = document.querySelector('.ativo')
    let desativar2 = document.querySelector('.ativo2')
    let desativar3 = document.querySelector('.ativo3')
    desativar.classList.remove('ativo')
    desativar2.classList.remove('ativo2')
    desativar3.classList.remove('ativo3')
    if(ativo >= contar -1){
        ativo=0;
        ativo2=0;
        ativo3=0;
    }else{
        ativo = ativo + 1
        ativo2 = ativo2 + 1
        ativo3 = ativo3 + 1
    }
    lista[ativo].classList.add('ativo')
    lista2[ativo2].classList.add('ativo2')
    lista3[ativo3].classList.add('ativo3')

    lista2[ativo2].classList.remove("direita");
    lista2[ativo2].classList.add("esquerda");
}

prev.onclick = () =>{
    let desativar = document.querySelector('.ativo')
    let desativar2 = document.querySelector('.ativo2')
    let desativar3 = document.querySelector('.ativo3')
    desativar.classList.remove('ativo')
    desativar2.classList.remove('ativo2')
    desativar3.classList.remove('ativo3')
    if(ativo <= 0){
        ativo = ativo + 2
        ativo2 = ativo2 + 2
        ativo3 = ativo3 + 2
    }else{
        ativo = ativo - 1
        ativo2 = ativo2 - 1
        ativo3 = ativo3 - 1
    }
    lista[ativo].classList.add('ativo')
    lista2[ativo2].classList.add('ativo2')
    lista3[ativo3].classList.add('ativo3')

    lista2[ativo2].classList.remove("esquerda");
    lista2[ativo2].classList.add("direita");
}





