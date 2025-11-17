import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import styles from "./SearchItem.module.css";

export default function SearchItem() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchSearchResults = useCallback(
    async (q) => {
      if (!q.trim()) {
        setSuggestions([]);
        return;
      }
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:2000/search?q=${q}`);
        const data = await res.json();
        setSuggestions(data.suggestions || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length > 0) fetchSearchResults(query);
    }, 400);
    return () => clearTimeout(timer);
  }, [query, fetchSearchResults]);

  const handleSuggestionClick = (item) => {
    setQuery("");

    // Navigate to category page
  navigate(`/${item.category}`, { replace: true });
  };

  const handleClose = () => {
      navigate(-1); // ⬅ previous page pe navigate
  };

  return (
    <div className={styles["search-page"]}>
      <div className={styles["search-header"]}>
        <IoClose className={styles["close-icon"]} onClick={handleClose} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className={styles["search-input"]}
          autoFocus
        />
      </div>

      {query && (
        <div className={styles["suggestions-dropdown"]}>
          {loading && <div className={styles["loading"]}>Loading...</div>}
          {!loading && suggestions.length === 0 && (
            <div className={styles["no-results"]}>No results found</div>
          )}
          {!loading &&
            suggestions.map((item, idx) => (
              <div
                key={idx}
                className={styles["suggestion-item"]}
                onClick={() => handleSuggestionClick(item)}
              >
                {item.name}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
