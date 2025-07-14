// src/services/apiService.js

// Try primary endpoint, fall back on failure
export async function fetchEmployees(seed = 'google') {
  const primary = `https://randomuser.me/api/?results=10&seed=${seed}`;
  try {
    const res = await fetch(primary);
    if (!res.ok) throw new Error('Primary API failed');
    const { results } = await res.json();
    return results;
  } catch {
    // fallback endpoint
    const fallback = 'https://monkeys.co.il/api2/wo.php';
    const res2 = await fetch(fallback);
    if (!res2.ok) throw new Error('Fallback API failed');
    const data2 = await res2.json();
    return data2.results;
  }
}
