import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useFetchBlogs = (uri) => {
  console.log(uri);
  const [blogs, setBlogs] = useState([]);
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(uri);

      setBlogs(response.data);
    } catch (e) {
      console.log(e.message);
    }
  }, [uri]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return { blogs };
};

export default useFetchBlogs;
