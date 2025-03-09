import React, { useEffect, useState } from 'react';
import FetchTable from './components/FetchTable';

const FormulaStock = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchStock = () => {
    fetch(
      'https://api.react-formula.com/learning-api/demos/stocks-project/stocks'
    )
      .then((res) => res.json())
      .then((data) => {
        setStocks(data);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchStock();
  }, []);
  const stockItems = stocks.map((stock, idx) => (
    <FetchTable key={idx} stock={stock} />
  ));
  return (
    <div className="flex justify-center bg-slate-200">
      <div className="w-full max-w-md flex justify-center min-h-screen items-center">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-col w-full ">{stockItems}</div>
        )}
      </div>
    </div>
  );
};

export default FormulaStock;
// https://api.react-formula.com/learning-api/demos/stocks-project/stocks
