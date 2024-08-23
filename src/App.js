import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  //Declarar e instanciar a variavel name
  const name = "Isabel Muinga"

  return (
    <div className="App">
      <h1>Testando o CSS</h1>
      <Frase />
      <SayMyName nome = "Ideolino"/>
      <SayMyName nome = {name}/>
      <Pessoa 
        nome = {name} 
        idade="27" 
        profissao="Médica" 
        foto="https://via.placeholder.com/150" 
      />
      <List />
    </div>
  );
}

export default App;
