import Button from "./evento/Button";

function Evento(){
    function meuEvento(){
        console.log(`Activando primeiro evento!`);
    }

    function segundoEvento(){
        console.log(`Activando o segundo evento`)
    }

    return(
        <>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
        </>
    )
}

export default Evento