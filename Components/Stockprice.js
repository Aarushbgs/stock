"use client"
// pages/StockPrice.js

import React, { useState } from 'react';
import axios from 'axios';

const StockPrice = () => {
  const [searchInput, setSearchInput] = useState('');
  const [stockData, setStockData] = useState(null);

  const fetchData = async () => {
    try {
      if (searchInput.trim() === '') {
        // Do not make API request if search input is empty
        return;
      }

      const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {
          function: 'GLOBAL_QUOTE',
          symbol: searchInput,
          datatype: 'json'
        },
        headers: {
          'X-RapidAPI-Key': 'd5667ac1d6msh45134b6ec184738p14087djsn985d04b2ec85',
          'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
      };

      const response = await axios.request(options);
      setStockData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter stock symbol"
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      <button onClick={fetchData}>Search</button>

      {stockData && (
        <div>
          <p>Stock Price for {searchInput}: {stockData['Global Quote']['06. volume']}</p>
        </div>
      )}
    </div>
  );
};

export default StockPrice;
