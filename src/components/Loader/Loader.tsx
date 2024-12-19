import React from 'react';
import './Loader.scss';

export const Loader: React.FC = () => (
  <div className="Loader" data-cy="loader">
      <div className="Loader__content" />
    </div>
);

export const getPreperedTodos = (todos, { query, sortField }) => {
  // Проверяем, что todos — это массив, если нет — возвращаем пустой массив
  if (!Array.isArray(todos)) {
    console.error("Expected 'todos' to be an array, but got:", todos);
    return [];
  }

  let preperedTodo = [...todos];

  const normalizedQuery = query.trim().toLowerCase();

  if (normalizedQuery) {
    preperedTodo = preperedTodo.filter(todo =>
      todo.title.toLowerCase().includes(normalizedQuery),
    );
  }

  if (sortField) {
    preperedTodo = preperedTodo.filter(todo => {
      switch (sortField) {
        case SORT_FIELD.COMPLEATED_TRUE:
          return todo.completed === true;

        case SORT_FIELD.COMPLEATED_FALSE:
          return todo.completed === false;

        default:
          return true;
      }
    });
  }

  return preperedTodo;
};
