import { useState, useEffect } from 'react';
import { fetchEmployees }      from '../services/apiService';

/**
 * Fetch an array of employees by seed.
 * @param {string} seed
 */
export default function useEmployees(seed) {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');

  useEffect(() => {
    if (!seed) return;

    let active = true;
    async function load() {
      setLoading(true);
      setError('');
      try {
        const data = await fetchEmployees(seed);
        if (active) setEmployees(data);
      } catch (e) {
        if (active) {
          setError(e.message);
          setEmployees([]);
        }
      } finally {
        if (active) setLoading(false);
      }
    }
    load();
    return () => { active = false; };
  }, [seed]);

  return { employees, loading, error };
}
