import './App.css';
import { AboutUs } from './components/aboutUs';
import { BottomCTA } from './components/bottomCTA';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { HealthyBand } from './components/healthyBand';
import { Meals } from './components/meals';
import { NavBar } from './components/navbar';
import { Subscriptions } from './components/subscriptions';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <AboutUs />
      <Meals />
      <HealthyBand />
      <Subscriptions />
      <BottomCTA />
      <Footer />
    </div>
  );
}

export default App;
