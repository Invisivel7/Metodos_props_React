
function Evento({ numero }){
    function meuEvento(){
        console.log(`Olá, fui activado! ${numero}`);
    }
    return(
        <>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>Activar</button>
        </>
    )
}

export default Evento