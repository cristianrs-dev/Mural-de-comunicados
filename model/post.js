

 module.exports = {

    posts : 
    [
        {
        id:"jkauueluas", 
         titulo:"primeiro post",
        descricao: "teste um da api"
        },
        
    ],

    getAll(){
        return this.posts
    },

    newPost(titulo,descricao){
        let post=
            {
                id:gerarId(),
                titulo:titulo,
                descricao:descricao
            }
        
        this.posts.push(post)
    

 },
    deletePost(indice){

        indice = this.posts.indexOf(indice)
        //if(indice > -1){
            this.posts.splice(indice,1)
       // }

    },

    putPost(indice,titulo,descricao){
        indice = this.posts.indexOf(indice)
        let post = {
            id:gerarId(),
                titulo:titulo,
                descricao:descricao
        }
        this.posts.push(post)
    }
}

 function gerarId(){
    return Math.random().toString(36).substring(2,9)
 }



    


