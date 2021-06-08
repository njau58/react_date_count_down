
import './App.css';
import Counter from './components/counter'
import team from './assets/team.jpg'
import Heading from './components/heading'

function App() {

 
  return (
    <div className="App">
     <Heading></Heading>
      <Counter/>
      <div className="team">
      <img src={team} alt="Image not found."/>
      </div>
   

    </div>
  );
}

export default App;
