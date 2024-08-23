//Componente com mais de uma props 
//(Ao invés de utilizar o nome props, podemos inicializar as variaveis directamente)

function Pessoa( {nome, idade, profissao, foto }){

    return(
        <div>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa
