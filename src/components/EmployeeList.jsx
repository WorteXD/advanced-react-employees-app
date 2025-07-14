import React from 'react';
import EmployeeItem from './EmployeeItem';

export default function EmployeeList({ employees }) {
  if (!employees.length) return <p>No employees found.</p>;

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {employees.map(emp => (
        <div key={emp.login.uuid} className="col">
          <EmployeeItem employee={emp} />
        </div>
      ))}
    </div>
  );
}
