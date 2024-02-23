"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=699e7d798f2942e7a85c079618c5d0df');
        setNews(response.data.articles); // Use response.data.articles
        console.log('API Data:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <>
       <div className='breakingnews'><h2>Top Recent News</h2></div>
 
      {news.map((article, index) => (
        
        <div className='container' key={index}>
          
          <div className='title'>
          <a href={article.url} target='blank'>
          {article.title}
          </a></div>
          <div className='content'>{article.content}</div>
          <a href={article.url} target='blank'>
            Read more
          </a>
        </div>
      ))}
    </>
  );
};

export default News;
