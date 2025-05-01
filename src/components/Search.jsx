import { useRef } from "react";
import { useKeys } from "../Hooks/useKeys";

export default function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  useKeys("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
