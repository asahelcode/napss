import { useState, useEffect } from 'react';

function useMedia(query: any) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    // Add the listener
    media.addEventListener('change', listener);

    // Check if the matches state needs to be updated
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Clean up the listener on unmount or when the query changes
    return () => media.removeEventListener('change', listener);
  }, [query, matches]);

  return matches;
}

export default useMedia;