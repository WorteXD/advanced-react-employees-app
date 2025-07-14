import { useState, useEffect } from 'react';
import { fetchEmployees }      from '../services/apiService';

/**
 * Fetch a single employee by seed and id.
 * @param {string} seed
 * @param {string} id
 */
export default function useEmployee(seed, id) {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');

  useEffect(() => {
    if (!seed || !id) return;

    let active = true;
    async function load() {
      setLoading(true);
      setError('');
      try {
        const list = await fetchEmployees(seed);
        const emp = list.find(e => e.login.uuid === id);
        if (!emp) throw new Error('Employee not found');
        if (active) setEmployee(emp);
      } catch (e) {
        if (active) setError(e.message);
      } finally {
        if (active) setLoading(false);
      }
    }
    load();
    return () => { active = false; };
  }, [seed, id]);

  return { employee, loading, error };
}
