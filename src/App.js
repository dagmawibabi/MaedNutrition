import './App.css';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Meals } from './components/meals';
import { NavBar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Meals />
      <Footer />
    </div>
  );
}

export default App;
