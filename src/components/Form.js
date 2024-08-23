import { useState } from 'react';

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault() //Para o formulário não fazer o reload da página assim que o evento for chamado
        console.log(`O utilizador ${name} foi cadastrado com a senha ${password}`)
    }

    //o name para uso do valor e o setName para alterar o valor
    //Pode-se colocar um vaor por default dentro da função useState('Matheus')
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Meu formulário de cadastro: </h1> 
            
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input 
                    type="text" 
                    placeholder="Digite o seu nome"
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input 
                    type="password" 
                    placeholder="Digite a sua senha"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form