
import CoinExchange from './Coinexchange';
import Coinsearch from './Coinsearch';
import Currencychange from './SelectCurrency';
import Portfolio from './Portfolio';
import Marketcap from './Sidebarmarketcap';
import Maindiv from './Graphdiv/Maindiv';


function Main() {
  return (
    <div className=" min-h-screen bg-white">
      <div className=" max-sm:p-2 p-4 flex max-lg:flex-col">
        <div className="lg:w-9/12 mt-[10px]">
          <div className="flex max-lg:flex-col gap-4">
            <Currencychange />
            <Coinsearch />
          </div>
          <Maindiv />
          <div className="mt-4 flex max-lg:flex-col gap-4">
            <Portfolio />
            <CoinExchange />
          </div>
        </div>
        <div className="mt-[10px] lg:w-3/12 lg:ml-4 max-lg:mt-4">
          <Marketcap />
        </div>
      </div>
    </div>
  );
}

export default Main;
