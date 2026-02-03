import { useEffect } from 'react';

export const useKey = (key, callback, enabled = true) => {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === key.toLowerCase()) {
        callback();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, callback, enabled]);
};
