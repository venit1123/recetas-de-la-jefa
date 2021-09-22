import './App.css';
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Card 
        title="Create New Receta"
        url="https://cdn.cheapism.com/images/Budget_Friendly_Mexican_Dishes.2e16d0ba.fill-1440x605.jpg"
        alt="Mexican Dishes"
        desc="Add a new Jefa's favorite recipe."
        />
      <Card
        title="View all Jefecita's Recipes"
        url="https://st2.depositphotos.com/1177973/8193/i/950/depositphotos_81935296-stock-photo-open-recipe-book.jpg"
        alt="Recipe Book"
        desc="Add a new Jefa's favorite recipe."
      />
    </div>
  );
}

export default App;
