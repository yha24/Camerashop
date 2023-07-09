import { useState } from 'react';
import 
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const showTiki = () => {
  const [data, setData] = useState[];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/tiki');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>ID: {item.id}</h2>
          <h3>Name: {item.name}</h3>
          <p>Price: {item.price}</p>
          <p>Description: {item.describes}</p>
          <img src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
  );
};

export default showTiki;
