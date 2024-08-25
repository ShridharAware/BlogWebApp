import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useFetchCategories = (uri) => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = useCallback(async () => {
    const response = await axios.get(uri);
    setCategories(response.data);
  }, [uri]);

  useEffect(() => {
    fetchCategories();
  }, [uri]);
  return { categories };
};

export default useFetchCategories;
