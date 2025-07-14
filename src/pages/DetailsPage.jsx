import React, { useContext }                     from 'react';
import { useParams }                              from 'react-router-dom';
import { FavoritesContext }                       from '../context/FavoritesContext';
import useEmployee                                 from '../hooks/useEmployee';
import { MapContainer, TileLayer, Marker, Popup }  from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function DetailsPage() {
  const { seed, id } = useParams();
  const { favs, setFavs } = useContext(FavoritesContext);
  const { employee, loading, error } = useEmployee(seed, id);

  if (loading)      return <p>Loading details…</p>;
  if (error)        return <div className="alert alert-danger">{error}</div>;
  if (!employee)    return <p className="text-muted">No details to display.</p>;

  const {
    name: { title, first, last },
    login: { username },
    registered: { date: regDate },
    dob: { age },
    gender, nat,
    email, phone,
    location: {
      street: { number, name: streetName },
      city, state, postcode, country,
      coordinates
    },
    picture: { large: avatarUrl }
  } = employee;

  const isFav = favs.some(f => f.login.uuid === id);
  const toggleFav = () =>
    setFavs(
      isFav
        ? favs.filter(f => f.login.uuid !== id)
        : [...favs, { ...employee, _savedSeed: seed }]
    );

  const coords = [
    parseFloat(coordinates.latitude),
    parseFloat(coordinates.longitude)
  ];

  return (
    <div className="card mb-4 p-4">
      {/* Header */}
      <div className="d-flex align-items-center mb-4">
        <img
          src={avatarUrl}
          alt={`${first} ${last}`}
          className="rounded-circle border"
          style={{ width: 120, height: 120, objectFit: 'cover' }}
        />
        <div className="ms-4">
          <h2>{`${title} ${first} ${last}`}</h2>
          <button
            className="btn btn-sm btn-primary"
            onClick={toggleFav}
          >
            {isFav ? '★ Remove Favorite' : '☆ Save Favorite'}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="detail-box">
            <strong>Username:</strong> {username}
          </div>
          <div className="detail-box">
            <strong>Age:</strong> {age}
          </div>
          <div className="detail-box">
            <strong>Gender:</strong> {gender}
          </div>
          <div className="detail-box">
            <strong>Nationality:</strong> {nat}
          </div>
          <div className="detail-box">
            <strong>Registered:</strong>{' '}
            {new Date(regDate).toLocaleDateString()}
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <strong>Email:</strong>{' '}
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <div className="detail-box">
            <strong>Phone:</strong> {phone}
          </div>
          <div className="detail-box">
            <strong>Address:</strong><br/>
            {number} {streetName}<br/>
            {city}, {state} {postcode}<br/>
            {country}
          </div>
        </div>
      </div>

      {/* Map */}
      <div style={{ height: '400px', width: '100%' }}>
        <MapContainer center={coords} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={coords}>
            <Popup>{`${first} ${last}`}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
