import { useEffect, useState } from "react";
const KEY = "994c4f04";
export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      callback?.();

      const controller = new AbortController();

      async function fetchMovie() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          //error ini tidak akan muncul jika no internet / connection
          if (!res.ok) {
            throw new Error("Suatu kesalahan terjadi dengan fetch movies");
          }

          const data = await res.json();

          if (data.Response === "False") throw new Error("My Movie not found");

          setMovies(data.Search);
          setError("");
        } catch (err) {
          // console.log(err.message);

          if (err.name === "TypeError") {
            setError("Gagal mengambil data. Periksa koneksi internetmu.");
          } else if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovie();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}
