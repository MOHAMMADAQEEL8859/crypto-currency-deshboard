import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CoinTypes } from "../api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SidebarMarketcap() {
  //state variables
  const selectedCurrency = useSelector((state) => state.currentCurrency);
  const [cryptocurrencies, setCryptocurrencies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(CoinTypes(selectedCurrency));
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCryptocurrencies(data);
      } catch (error) {
        // If API fails this wiil disp,ay the error messege
        toast.error("Failed to fetch data from the API");
      }
    };
    fetchData();
  }, [selectedCurrency]);

  return (
    <div className="w-full h-screen lg:h-[778px] text-black shadow-sm transition ease-in-out border-black border-2 hover:ring-4 rounded-md ring-black ring-offset-slate-50 overflow-hidden bg-white ">
      <div className="sticky top-0 z-10 bg-gray-300 ">
        <p className="font-semibold text-xl p-4">Cryptocurrency Prices by Market Cap</p>
      </div>
      <div className="h-full overflow-y-scroll scrollbar-hide">
        {cryptocurrencies.map((currency, i) => (
          <div key={i} className="border-b px-6 py-4 max-sm:px-3 max-sm:py-2 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <img src={currency.image} alt="IMG" className="w-[18px] rounded-full" />
                <p className="font-medium">{currency.name}</p>
              </div>
              <p className="text-sm text-black">MarketCap ₹{currency.market_cap}</p>
            </div>
            <div className="flex justify-center items-center">
              {currency.price_change_percentage_24h > 0 && (
                <div className="flex justify-between items-center">
                  <svg width="30px" height="30px" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1921 9.23047L15.9065 13.6879C16.3408 14.2089 15.9702 15 15.292 15L8.70803 15C8.02976 15 7.65924 14.2089 8.09346 13.6879L11.8079 9.23047C11.9079 9.11053 12.0921 9.11053 12.1921 9.23047Z" fill="#69ca00" />
                  </svg>
                  <p className="text-green-800 font-semibold pl-2">{currency.price_change_percentage_24h.toFixed(2)}%</p>
                </div>
              )}
              {currency.price_change_percentage_24h < 0 && (
                <div className="flex justify-between items-center">
                  <svg width="30px" height="30px" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.8079 14.7695L8.09346 10.3121C7.65924 9.79109 8.02976 9 8.70803 9L15.292 9C15.9702 9 16.3408 9.79108 15.9065 10.3121L12.1921 14.7695C12.0921 14.8895 11.9079 14.8895 11.8079 14.7695Z" fill=" #ff8000" />
                  </svg>
                  <p className="text-red-800 font-semibold pl-1">{currency.price_change_percentage_24h.toFixed(2)}%</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}