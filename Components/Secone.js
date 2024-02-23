"use client"
import React, { useState } from 'react';
import axios from 'axios';

const Secone = () => {
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
          datatype: 'json',
        },
        headers: {
          'X-RapidAPI-Key': 'd5667ac1d6msh45134b6ec184738p14087djsn985d04b2ec85',
          'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
        },
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
    <div className='search'>
      <h1>Stockwikipedia</h1>
      <div className='searchbox'>
        <input
          type="text"
          placeholder="Enter stock symbol"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <button onClick={fetchData}>Get Data</button>
        {stockData && (
          <div className='ApiConatiner'>
            
              Stock Symbol :<span>{stockData['Global Quote']['01. symbol']}</span> 
              <br/>
              Open: {stockData['Global Quote']['02. open']}
              <br/>
              High: {stockData['Global Quote']['03. high']}
              <br/>
              low: {stockData['Global Quote']['04. low']}
              <br/>
               Price : {stockData['Global Quote']['05. price']}
              <br/>
              change percent : {stockData['Global Quote']['10. change percent']}
              <br/>
         </div>
        )}
      </div>
    </div>
  );
};

export default Secone;
