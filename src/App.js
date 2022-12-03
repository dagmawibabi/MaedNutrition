import './App.css';
import { BottomCTA } from './components/bottomCTA';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Meals } from './components/meals';
import { NavBar } from './components/navbar';
import { Subscriptions } from './components/subscriptions';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Meals />
      <Subscriptions />
      <BottomCTA />
      <Footer />
    </div>
  );
}

export default App;
