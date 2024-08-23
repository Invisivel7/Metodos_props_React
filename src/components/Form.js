function Form(){

    function cadastrarUsuario(e){
        e.preventDefault() //Para o formulário não fazer o reload da página assim que o evento for chamado
        console.log("cadastrou o usuário")
    }
    return(
        <div>
            <h1>Meu cadastro: </h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome" />
                </div>
                <div>
                    <input type="submit" value="cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form