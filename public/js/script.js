//http://localhost:3000/api/all
//http://localhost:3000/api/new
//http://localhost:3000/api/atualizar
atualizarMural()

function cadastrar(){

    let titulo =document.getElementById("titulo").value
    let descricao = document.getElementById("descricao").value
    let post = {titulo,descricao}

    if(!validarCampos()){
        alert("cmapos precisam ser preenchidos")
    }else{

    let url = 'http://localhost:3000/api/new'
    let options = { method:"POST", headers:{'Content-Type':'application/json'}, body:JSON.stringify(post)}

        fetch(url,options)
            .then((res)=>{
            
                return res.json();
            })
            .then((data)=>{
                console.log(data.titulo)
                atualizarMural()
            })
        
    }
}
      
function atualizarMural(){

    let cardId = document.getElementById("cardId")
  
    let options = {method:"GET", headers:{'Content-Type':'application/json'},}
    let url = 'http://localhost:3000/api/all'

    fetch(url,options)
        .then((res)=>{
           
            return res.json();
        })
        .then((data)=>{
          
            let posts  = JSON.parse(data)
            
            
           cardId = document.getElementById("cardId")
            cardId.innerHTML = ""
            posts.forEach((post,indice) => {
                
                cardId.innerHTML+=`
                <div id="card" class="d-flex justify-content-center m-1 card col-sm-3 col-lg-3" >
                    <h5 id="titulo_descricao" class="card-title card-header">${indice}-${post.titulo}</h5>
                    <p id = "corpo_descricao" class="card-text card-body">${post.descricao}</p>
                    <div class="d-flex justify-content-end">
                        <a href="#" onclick="modal();backModal();atualizarPost(${indice})" class="btn btn-secondary m-1 col-4">editar</a>
                        <a href="#" onclick="deletarPost(${indice})" class="btn btn-danger m-1 col-4">apagar</a>
                    </div>
                </div>
            `

            });
           
           
           
           })
           
}




function deletarPost(indice){
    
    let url = `http://localhost:3000/api/delete/${indice}` 
    let options = { method:'DELETE',headers:{'Content-type':'application/json'}}

    fetch(url,options)
    .then((res)=>{
        console.log("erro na requisicao",res)
    })
    .then((data)=>{
        console.log("card deletado com sucesso",data)
        

        atualizarMural()
    })
   
}

function atualizarPost(indice){
    console.log(`indice dentro da funcao atualizar post ${indice}`)
    console.log(typeof(indice))
    let titulo =document.getElementById("tituloModal").value
    let descricao = document.getElementById("descricaoModal").value
    let post={titulo,descricao}
    if(!validarCampos()){
        alert("cmapos precisam ser preenchidos")
    }else{
        let url = `http://localhost:3000/api/atualizar/${indice}`
        let options = {method:'PUT',headers:{'Content-type':'application/json'},body:JSON.stringify(post)}
    
        fetch(url,options)
        .then((res)=>{
            console.log(`erro na requisição${res}`)
            return res.json()
        })
        .then((data)=>{
            console.log(`post atualizado${data}`)
            let posts = data
            posts.titulo[indice] = titulo
            posts.descricao[indice] = descricao
            atualizarMural()
        })
    }
}



function modal(){
    let modal = document.getElementById("meuModal")
    modal.style.display='block'
  }
  function fecharModal(){
    let modal = document.getElementById("meuModal")
    modal.style.display='none'
  }
  
  function backModal(){
    let modal = document.getElementById("meuModal")
    modal.classList.add("custom-modal-backdrop")
  }
  
  function validarCampos(){
    let titulo =document.getElementById("titulo").value.trim()
    let descricao = document.getElementById("descricao").value.trim()
    let valido = true
    if(titulo === ''){
        
       return valido = false
    }else if(descricao === ''){
       
      return valido = false
    }
    return valido
  }