// import './App.css';
// import CoinExchange from './components/Coinexchange';
// import Coinsearch from './components/Coinsearch';
// import Currencychange from './components/Currencychange';
// import Maindiv from './components/Graphdiv/Maindiv';
// import Marketcap from './components/Sidebarmarketcap';
import Navbar from './components/navbar';
// import Ownername from './Components/Ownername';
// import Portfolio from './components/Portfolio';

import Main from "./components/main";


function App() {
  return (
    <div className="min-h-screen">
      {/* This is the navbar component */}
      <Navbar />

      {/* This is the main component */}
      <Main/>
    </div>
  );
}

export default App;
