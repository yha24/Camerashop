import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Components/style/tiki.css";

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
    <div className="item">
      {data.map((item) => (
        <div key={item.id}>
          <div >
            <h3 className="item-name">Name: {item.name}</h3>
            <p className="item-price">Price: {item.price}</p>
            <p>Description: {item.describes}</p>
   
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApiDataDisplay;
