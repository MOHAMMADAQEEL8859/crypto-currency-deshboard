import { useState } from "react";
import { myCurrencies } from "../CurrencyChartData/data";
import { useDispatch, useSelector } from "react-redux";
import { currencyOfCountry } from "../Redux/state/Action";

const Currencychange = () => {
  //state variables
    const selectedCurrency = useSelector((state) => state.currentCurrency);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const toggletab = () => {
      setIsOpen((prev) => !prev);
    };
  
    // function to select the crypto currencies from the list
    const selectCurrency = (currency) => {
      dispatch(currencyOfCountry(currency));
      setIsOpen((prev) => !prev);
    };
    return(
    <div className=" bg-gray-300 mx-7 lg:w-1/10  inline-flex hover:ring-4 ring-black hover: rounded-md outline outline-black outline-3">
      <div className=" h-14 items-center relative flex text-black">
        <div onClick={toggletab} className="w-14 px-4 font-medium text-lg cursor-pointer rounded-md">
          {selectedCurrency || "Select Currency"}
        </div>
        <div onClick={toggletab} className="h-full relative ">
          <button type="button" className="flex h-full items-center justify-center rounded-md hover:bg-gray-500">
            {!isOpen && <img src="./images/dropdown.svg" alt="" />}
            {isOpen && <img src="./images/dropup.svg" alt="" />}
          </button>
        </div>

        {isOpen && (
          <div className=" rounded-lg text-center w-full min-w-[100px] absolute top-11 right-0 z-10 mt-4 origin-top-right ">
            <div>
              {myCurrencies.map((currency, i) => {
                return (
                  <div key={i} onClick={() => selectCurrency(currency)} className=" hover:ring-2 ring-black rounded-md block  px-4 py-2 text-base text-black  outline outline-1 bg-gray-300 cursor-pointer ">
                    {currency}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

    </div>
    )};

export default Currencychange;
