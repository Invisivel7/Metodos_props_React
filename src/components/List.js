import Item from './Item';

function List(){

    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={2014} />
                <Item marca="Mercedes" ano_lancamento={2018} />
                <Item marca="Fiat" ano_lancamento={2022} />
                <Item />
            </ul>
        </>
    ) 
}

export default List