import React from 'react';

function Todo({ children, id, handleDelete }) {
  return (
    <li>
      <span>{children}</span>
      <button onClick={handleDelete}>
        O'chir
      </button>
    </li>
  );
}

export default Todo;
