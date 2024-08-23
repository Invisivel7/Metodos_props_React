import Frase from './Frase';

//Criar uma função "componente" com o mesmo nome do arquivo

function HelloWorld(){
    
    return(
        <div>
            <Frase />
            <h1>Meu primeiro componente</h1>
        </div>
    )
}

export default HelloWorld