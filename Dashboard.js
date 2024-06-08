import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [code, setCode] = useState([]);
  
  useEffect(() => {
    const fetchCode = async () => {
      try {
        const response = await axios.get('/api/code');
        setCode(response.data);
      } catch (error) {
        // Handle error
      }
    };
    fetchCode();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {code.map(item => (
        <div key={item.id}>{item.content}</div>
      ))}
    </div>
  );
};

export default Dashboard;
