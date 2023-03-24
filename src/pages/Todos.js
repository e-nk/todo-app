import React, { useState, useEffect } from 'react';

function Todo() {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://api.npoint.io/84e0f523a008e3f36143');
        const data = await response.json();
        setTodos(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Todo List</h2>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {todos.map((todo) => (
            <div key={todo.id} className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{todo.task}</h5>
                  <p className="card-text">ID: {todo.id}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Todo;
