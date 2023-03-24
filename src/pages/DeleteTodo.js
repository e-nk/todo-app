import React, { useEffect, useState } from 'react';

function DeleteTodo() {
  const [todos, setTodos] = useState([]);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://api.npoint.io/84e0f523a008e3f36143');
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTodos();
  }, []);

  const handleTodoDelete = async (id) => {
    try {
      const response = await fetch(`https://api.npoint.io/84e0f523a008e3f36143/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        setDeleteSuccess(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Delete Todo</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Task</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <th scope="row">{todo.id}</th>
              <td>{todo.task}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleTodoDelete(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {deleteSuccess && (
        <div className="alert alert-success" role="alert">
          Task deleted successfully!
        </div>
      )}
    </div>
  );
}

export default DeleteTodo;
