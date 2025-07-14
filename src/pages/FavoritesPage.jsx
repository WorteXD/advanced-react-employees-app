import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import EmployeeList         from '../components/EmployeeList';

export default function FavoritesPage() {
  const { favs } = useContext(FavoritesContext);

  return (
    <div>
      <h1 className="mb-4">Your Favorite Employees</h1>
      {favs.length
        ? <EmployeeList employees={favs} />
        : <p>You have no favorites yet. Click the ★ on any employee to save them here.</p>
      }
    </div>
  );
}
