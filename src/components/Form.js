function Form(){

    function cadastrarUsuario(e){
        e.preventDefault() //Para o formulário não fazer o reload da página assim que o evento for chamado
        console.log("cadastrou o usuário")
    }
    return(
        <div>
            <h1>Meu formulário de cadastro: </h1> 
            
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" placeholder="Digite o seu nome" />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" placeholder="Digite a sua senha" />
                </div>
                <div>
                    <input type="submit" value="cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form