
window.addEventListener('scroll',function(){
    var header = document.querySelector('#header');

    header.classList.toggle('rolagem',window.scrollY>900);
})

function abrirModal1(){
    const modal = document.querySelector('#janela-modal1');
    modal.classList.add('abrir');
    modal.addEventListener('click',(e) =>{
        if(e.target.id =='fechar'|| e.target.id == 'janela-modal1'){
            modal.classList.remove('abrir');
        }
    })

}

function abrirModal2(){
    const modal = document.querySelector('#janela-modal2');
    modal.classList.add('abrir');
    modal.addEventListener('click',(e) =>{
        if(e.target.id =='fechar'|| e.target.id == 'janela-modal2'){
            modal.classList.remove('abrir');
        }
    })

}

function abrirModal3(){
    const modal = document.querySelector('#janela-modal3');
    modal.classList.add('abrir');
    modal.addEventListener('click',(e) =>{
        if(e.target.id =='fechar'|| e.target.id == 'janela-modal3'){
            modal.classList.remove('abrir');
        }
    })

}


function abrirModal4(){
    const modal = document.querySelector('#janela-modal4');
    modal.classList.add('abrir');
    modal.addEventListener('click',(e) =>{
        if(e.target.id =='fechar'|| e.target.id == 'janela-modal4'){
            modal.classList.remove('abrir');
        }
    })

}
