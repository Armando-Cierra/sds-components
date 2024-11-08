import { useState, useEffect } from 'react';

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleChange = (event: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => {
      setMatches(event.matches);
    };

    setMatches(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
