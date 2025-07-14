// src/components/EmployeeItem.jsx
import React, { useContext } from 'react';
import { Link }              from 'react-router-dom';
import { FavoritesContext }  from '../context/FavoritesContext';
import { ApiConfigContext }  from '../context/ApiConfigContext';

const COLORS = [
  '#FFD700', '#FFB6C1', '#98FB98', '#87CEEB', '#FFA07A',
  '#DDA0DD', '#B0E0E6', '#F0E68C', '#E6E6FA', '#F5DEB3'
];
function pickColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return COLORS[Math.abs(hash) % COLORS.length];
}

export default function EmployeeItem({ employee }) {
  const { favs, setFavs }   = useContext(FavoritesContext);
  const { seed: ctxSeed }    = useContext(ApiConfigContext);
  const id                   = employee.login.uuid;
  const isFav                = favs.some(f => f.login.uuid === id);
  const bgColor              = pickColor(id);
  const size                 = 100;

  function toggleFav() {
    if (isFav) {
      setFavs(favs.filter(f => f.login.uuid !== id));
    } else {
      setFavs([...favs, { ...employee, _savedSeed: ctxSeed }]);
    }
  }

  const linkSeed = employee._savedSeed || ctxSeed;

  return (
    <div className="card h-100">
      <div
        className="mx-auto mt-3"
        style={{
          width: size, height: size,
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundColor: bgColor
        }}
      >
        <img
          src={employee.picture.large}
          alt={`${employee.name.first} ${employee.name.last}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div className="card-body text-center">
        <h5 className="card-title">
          {employee.name.first} {employee.name.last}{' '}
          <button
            className={`btn btn-sm ms-2 ${
              isFav ? 'btn-warning' : 'btn-outline-warning'
            }`}
            onClick={toggleFav}
            aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFav ? '★' : '☆'}
          </button>
        </h5>
        <p className="card-text">
          Age: {employee.dob.age}<br/>
          {employee.location.city}, {employee.location.country}
        </p>
        <Link to={`/employee/${linkSeed}/${id}`} className="btn btn-primary">
          Details
        </Link>
      </div>
    </div>
  );
}
