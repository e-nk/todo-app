import React, { useState } from 'react';

const AddTodo = () => {
  const [task, setTask] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task })
      });
      const data = await response.json();
      setMessage(`Added new task "${task}" with ID ${data.id}`);
      setTask('');
    } catch (error) {
      console.error(error);
      setMessage('Error adding new task. Please try again later.');
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Add Todo</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="task">Task:</label>
              <input
                type="text"
                className="form-control"
                id="task"
                value={task}
                onChange={(event) => setTask(event.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
          {message && <p className="mt-3">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
