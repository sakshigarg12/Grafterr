import { useEffect, useState, useCallback } from "react";

function useContent(fetchFn) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadData = useCallback(() => {
    setLoading(true);
    setError(false);

    fetchFn()
      .then((res) => {
        setData(res);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [fetchFn]);

  useEffect(() => {
    loadData();
  }, [loadData]); //

  return { data, loading, error, retry: loadData };
}

export default useContent;
