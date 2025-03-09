import clsx from 'clsx';
import React from 'react';

const FetchTable = (props) => {
  const { stock } = props;
  const priceDiff = stock.current_price - stock.previous_price;
  const percentChange = (priceDiff / stock.previous_price) * 100;
  return (
    <div className="border border-slate-200 m-4 p-4 bg-white flex justify-between">
      <div className="mb-4">
        <div className="text-slate-600">{stock.name}</div>
        <div className="text-orange-400 text-2xl">{stock.symbol}</div>
      </div>
      <div className="flex flex-col items-end mb-4">
        <div
          className={clsx(
            'text-sm rounded-full p-1 w-16 text-center',
            percentChange >= 0
              ? 'bg-green-400 text-emerald-600'
              : 'bg-rose-300 text-red-700'
          )}
        >
          {percentChange.toFixed(2)}%
        </div>
        <div className="text-slate-800 text-2xl">
          ${stock.current_price / 100}
        </div>
      </div>
    </div>
  );
};

export default FetchTable;
