import React from "react";

export default function Dashboard({ tasks }) {

  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const pending = total - completed;

  return (
    <div className="dashboard">

      <div className="card total">
        <h2>{total}</h2>
        <p>Total</p>
      </div>

      <div className="card completed">
        <h2>{completed}</h2>
        <p>Completed</p>
      </div>

      <div className="card pending">
        <h2>{pending}</h2>
        <p>Pending</p>
      </div>

    </div>
  );
}