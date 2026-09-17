import { useEffect, useState } from "react";

function usePortfolioData(fileName) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(`${import.meta.env.BASE_URL}data/${fileName}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Erro ao carregar dados");
        }

        return response.json();
      })
      .then(data => {
        setData(data);
        setError(null);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });

  }, [fileName]);

  return {
    data,
    loading,
    error
  };
}

export default usePortfolioData;