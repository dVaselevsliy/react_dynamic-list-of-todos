import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[]
}

export const TodoList: React.FC<Props> = ({
  todos,
  select,
  setSelect,
  loading,
  setLoading,
  setTodos,
  setSelectedTodo
}) => (
  <table className="table is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>
          <span className="icon" data-cy="iconCompleted">
            <i className="fas fa-check" />
          </span>
        </th>
        <th>Title</th>
        <th> </th>
      </tr>
    </thead>

    <tbody>
      {todos.map((todo) => (
        <TodoInfo
          todo={todo}
          key={todo.id}
          select={select}
          setSelect={setSelect}
          loading={loading}
          setLoading={setLoading}
          userId={todo.userId}
          setTodos={setTodos}
          setSelectedTodo={setSelectedTodo}
          />
      ))}
    </tbody>
  </table>
);
