// src/utils/fetcher.ts
import { API_BASE_URL } from '../config';

const fetcher = (url: string, options?: RequestInit): Promise<any> => {
  const fullUrl = `${API_BASE_URL}${url}`;
  return fetch(fullUrl, options)
    .then(response => {
      if (!response.ok) {
        // Throw an error if the response status is not in the range 200-299
        throw new Error(`An error occurred: ${response.status} ${response.statusText}`);
      }
      return response.json();
    });
};

export default fetcher;
