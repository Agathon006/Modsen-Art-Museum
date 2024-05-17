import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const useHttp = () => {
  const dispatch = useDispatch();

  const request = useCallback(
    async (
      url: string,
      method: 'GET' | 'POST' = 'GET',
      body: BodyInit | null = null,
      headers: { 'Content-type': string } = {
        'Content-type': 'application/json',
      }
    ) => {
      dispatch({ type: 'SET_PROCESS', payload: 'loading' });
      try {
        const response = await fetch(url, { method, body, headers });
        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }
        const data = await response.json(); // If we don't trust our server, we can add here "unknown" and additional checks later
        return data;
      } catch (e) {
        dispatch({ type: 'SET_PROCESS', payload: 'error' });
        throw e;
      }
    },
    []
  );

  return { request };
};
