import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (endPoint) => {
  const [data, setData] = useState([]); ////estado
  /////funcion
  async function fetchData() {
    const response = await axios.get(endPoint);
    setData(response.data);
  }

  ////useEffect
  useEffect(() => {
    try {
      fetchData(); ///exec function
    } catch (error) {
      console.error(error);
    }
  }, []);

  return data;
};

export default useFetch;
