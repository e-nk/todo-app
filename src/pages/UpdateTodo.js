import React, { useEffect, useState } from 'react';

function UpdateTodo() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [updatedTodo, setUpdatedTodo] = useState('');
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const [loading, setLoading] = useState(true);

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

  const handleTodoSelect = (todo) => {
    setSelectedTodo(todo);
    setUpdatedTodo(todo.task);
    setUpdateSuccess(false);
  };

  const handleTodoUpdate = async () => {
    try {
      const response = await fetch(`https://api.npoint.io/84e0f523a008e3f36143${selectedTodo.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: updatedTodo }),
      });
      const data = await response.json();
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === data.id ? data : todo))
      );
      setUpdateSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Update Todo</h2>
      <div className="row">
        <div className="col-md-4">
          <h3 className="mb-3">Existing Tasks</h3>
          <p className="mb-3">(Click Task To Edit)</p>
          {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
          <ul className="list-group">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="list-group-item"
                onClick={() => handleTodoSelect(todo)}
              >
                {todo.task}
              </li>
            ))}
          </ul>
          )}
        </div>
        {selectedTodo && (
          <div className="col-md-8">
            <h3 className="mb-3">Update Task</h3>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="taskInput"
                placeholder="Task"
                value={updatedTodo}
                onChange={(event) => setUpdatedTodo(event.target.value)}
              />
              <label htmlFor="taskInput">Task</label>
            </div>
            <button className="btn btn-primary mb-3" onClick={handleTodoUpdate}>
              Update Task
            </button>
            {updateSuccess && (
              <div className="alert alert-success" role="alert">
                Task updated successfully!
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default UpdateTodo;
