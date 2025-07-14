/**
 * Geocode a free-form address via Nominatim.
 * Returns { lat: string, lon: string } of the first result.
 */
export async function geocodeAddress(address) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
  const res = await fetch(url, { headers: { 'User-Agent': 'AdvancedReactApp/1.0' } });
  if (!res.ok) throw new Error('Geocoding failed');
  const data = await res.json();
  if (!data.length) throw new Error('Location not found');
  return { lat: data[0].lat, lon: data[0].lon };
}
