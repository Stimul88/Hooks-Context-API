import {useEffect, useState} from "react";

export const useJsonFetch = (
  {
    url,
    opts,
  }
) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(url)
  }, [opts]);

  const fetchData = async (url) => {
    setLoading(true);

    try {
      setLoading(true);
      const response = await fetch(`${url}${opts}`)
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }

  }
  return [data, loading, error]
}