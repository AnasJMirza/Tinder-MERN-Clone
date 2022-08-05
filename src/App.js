import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import TinderCard from './components/tinderCard/TinderCard';
import SwipeButtoons from './components/swipeButtons/SwipeButtons';

function App() {
  return (
    <div >
      <Header />
      <TinderCard />
      <SwipeButtoons />
    </div>
  );
}

export default App;
