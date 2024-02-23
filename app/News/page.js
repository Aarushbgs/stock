"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '@/Components/Navbar';

const News = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=699e7d798f2942e7a85c079618c5d0df');
        setNews(response.data.articles);
        console.log('API Data:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
      }
    };

    fetchData();
  }, []);

  return (
    <>   
      <Navbar />
      <div className='breakingnews'><h2>Top Recent News</h2></div>

      {error && <div>{error}</div>}

      {news.map((article, index) => (
        <div className='container' key={index}>
          <div className='title'>
            <a href={article.url} target='_blank' rel='noopener noreferrer'>
              {article.title}
            </a>
          </div>
          <div className='content'>{article.content}</div>
          <a href={article.url} target='_blank' rel='noopener noreferrer'>
            Read more
          </a>
        </div>
      ))}
    </>
  );
};

export default News;
