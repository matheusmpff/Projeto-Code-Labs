
 function salvarCompra(){

    const modal = document.querySelector('#janela-modal1');
    modal.classList.remove('abrir');
    alert('Transferindo a informação, aguarde!');

    const form = document.querySelector("#form1");

    form.addEventListener('submit', async event=>{
        event.preventDefault();
        var nome = document.querySelector("#nome1").value;
        const produto = document.querySelector("#produto1").value;
        const quantidade = document.querySelector("#quantidade").value;
        const data = document.querySelector("#data1").value;

        
         await SheetDB.write('https://sheetdb.io/api/v1/7sjuyeffsk5iu', { sheet: 'compras', data: {
            "nome":nome,
            "produto": produto,
            "quantidade": quantidade,
            "data": data
            } }).then(function(result){
                console.log(result);
              }, function(error){
                console.log(error);
              });
              
              alert('Venda registrada!');
              location.reload();
    })

    
    
}


function salvarCliente(){

    const modal = document.querySelector('#janela-modal2');
    modal.classList.remove('abrir');
    alert('Transferindo a informação, aguarde!');

    const form = document.querySelector("#form2");

    form.addEventListener('submit', async event=>{
        event.preventDefault();

        var nome = document.querySelector("#nome2").value;
        const endereco = document.querySelector("#endereco").value;
        const contato = document.querySelector("#contato").value;
        

        await SheetDB.write('https://sheetdb.io/api/v1/7sjuyeffsk5iu', { sheet: 'clientes', data: {
            "nome":nome,
            "endereco": endereco,
            "contato": contato
            } }).then(function(result){
                console.log(result);
              }, function(error){
                console.log(error);
              });
              
              alert('Produto registrado!');
              location.reload();

    })

    
}

function salvarProduto(){

    const modal = document.querySelector('#janela-modal3');
    modal.classList.remove('abrir');

    alert('Transferindo a informação, aguarde!');

    const form = document.querySelector("#form3");

    form.addEventListener('submit', async event=>{
        event.preventDefault();

        var produto = document.querySelector("#produto3").value;
        const preco = document.querySelector("#preco").value;
       
        

        await SheetDB.write('https://sheetdb.io/api/v1/7sjuyeffsk5iu', { sheet: 'produtos', data: {
            "produto":produto,
            "preco": preco
            } }).then(function(result){
                console.log(result);
              }, function(error){
                console.log(error);
              });
              
              alert('Produto registrado!');
              location.reload();

    })

    
}

