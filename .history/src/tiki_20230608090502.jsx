import React, { useEffect, useState } from "react";
import axios from "axios";
import "src/style/tiki.css";

const ApiDataDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/tiki");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <div className="item">
            <h3 className="item-name">Name: {item.name}</h3>
            <p className="item-price">Price: {item.price}</p>
            <p>Description: {item.describes}</p>
            <img src={item.image} alt={item.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApiDataDisplay;
