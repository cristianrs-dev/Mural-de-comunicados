//http://localhost:3000/api/all
//http://localhost:3000/api/new
//http://localhost:3000/api/atualizar
atualizarMural()

function cadastrar(){

    let titulo =document.getElementById("titulo").value
    let descricao = document.getElementById("descricao").value
    let post = {titulo,descricao}

    let url = 'http://localhost:3000/api/new'
    let options = { method:"POST",
         headers:{'Content-Type':'application/json'},
          body:JSON.stringify(post)}

    fetch(url,options)
        .then((res)=>{
          
            return res.json();
        })
        .then((data)=>{
            console.log(data.titulo)
            atualizarMural()
        })
        
     
}
      
function atualizarMural(){


    

    let cardId = document.getElementById("cardId")
    let titulo =document.getElementById("titulo").value
    let descricao = document.getElementById("descricao").value
    let card = document.getElementById("card")


    let url = 'http://localhost:3000/api/all'
    fetch(url,{
        method:"GET",
        headers:{
            'Content-Type':'application/json',
        },
         })
        .then((res)=>{
           
            return res.json();
        })
        .then((data)=>{
            //console.log(data.titulo)
            let posts  = JSON.parse(data)
            console.log(posts)
            
           cardId = document.getElementById("cardId")
          cardId.innerHTML = ""
            posts.forEach((post,indice) => {
                
                cardId.innerHTML+=`
                <div id="card" class="d-flex justify-content-center card card-body" >
                    <h5 id="titulo_descricao" class="card-title card-header">${post.titulo}</h5>
                    <p id = "corpo_descricao" class="card-text card-body">${post.descricao}</p>
                    <div class="d-flex justify-content-end">
                        <a href="#" onclick="atualizarPost(${indice});modal()" class="btn btn-secondary m-1 col-4">editar</a>
                        <a href="#" onclick="deletarPost(${indice})" class="btn btn-danger m-1 col-4">apagar</a>
                    </div>
                </div>
            `

            });
           
           
           
           })
           
}




function deletarPost(indice){
    console.log("dentro da funcao delete",indice)
    let url = `http://localhost:3000/api/delete/${indice}` 
    fetch(url,{
            method:'DELETE',
            headers:{'Content-type':'application/json'}
    })
    .then((res)=>{
        console.log("erro na requisicao",res)
    })
    .then((data)=>{
        console.log("card deletado com sucesso",data)

        atualizarMural()
    })
   
}

function atualizarPost(indice){
    let url = `http://localhost:3000/api/atualizar/${indice}`
    fetch(url,{
        method:'PUT',
        headers:{'Content-type':'application/json'}

    })
    .then((res)=>{
        console.log(`erro na requisição${res}`)
    })
    .then((data)=>{
        console.log(`post atualizado${data}`)
    })
}



function modal(){
    let modal = document.getElementById("meuModal")
    modal.style.display='block'
  }
  function fechar(){
    let modal = document.getElementById("meuModal")
    modal.style.display='none'
  }
  
  function backModal(){
    let modal = document.getElementById("meuModal")
    modal.classList.add("custom-modal-backdrop")
  }
  
  alert("em fase de desenvolvimento")