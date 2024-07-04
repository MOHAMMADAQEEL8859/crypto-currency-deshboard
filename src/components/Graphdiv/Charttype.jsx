import React, { useState } from "react";
import { ChartType } from "../../CurrencyChartData/data";
import { useDispatch, useSelector } from "react-redux";
import { myChartType } from "../../Redux/state/Action";

const ChartTypeSelector = () => {

  //state variables
  const [isOpen, setIsOpen] = useState(false);
  const selectedChart = useSelector((state) => state.ChartTypeSelector);
  const dispatch = useDispatch();

  // function to open the drop-down on clicking
  const toggling = () => {
    setIsOpen((prev) => !prev);
  };

  // function to select currencies from the drop-down list
  const selectCurrency = (chart) => {
    dispatch(myChartType(chart));
    setIsOpen((prev) => !prev);
  };

  return (
    <div className=" max-sm:w-10/12 w-5/12 max-lg:w-5/12 max-sm:h-6 h-10 flex rounded-md border-black border-2 hover:ring-2 ring-black ">
      <div className="w-full h-full items-center relative flex rounded-md bg-white text-black shadow-sm">
        <div onClick={toggling} className="w-full rounded-l-md px-4 max-sm:px-2 py-2 font-medium max-sm:text-xs max-md:text-sm lg:text-base cursor-pointer" >
          {selectedChart || "Chat-Type"}
        </div>
        <div onClick={toggling} className="h-full relative">
          <button type="button" className="flex h-full items-center justify-center rounded-r-md border-1 border-black px-2 ">
            {!isOpen && <img src="./images/dropdown.svg" alt="" />}
            {isOpen && <img src="./images/dropup.svg" alt="" />}
          </button>
        </div>

        {isOpen && (
          <div className="min-width-[200px] absolute max-sm:top-2 top-7 right-0 z-10 mt-4 origin-top-right rounded-md border border-black bg-white shadow-lg hover:ring-2 ring-black">
            <div>
              {ChartType.map((chart, i) => {
                return (
                  <div key={i} onClick={() => selectCurrency(chart)} className=" text-base text-black no-underline hover: cursor-pointer block rounded-lg px-4 py-2 max-sm:text-xs hover:ring-2 ring-black" >
                    {chart}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default ChartTypeSelector;