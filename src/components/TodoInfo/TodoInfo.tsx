import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
  setSelect: boolean;
  setSelectedTodo: Todo;
  select: boolean;
};

export const TodoInfo: React.FC<Props> = ({
  todo,
  setSelect,
  setSelectedTodo,
  select,
}) => {
  return (
    <tr data-cy="todo" className="">
      {' '}
      {/* //  if not select className {} has-background-info-light */}
      <td className="is-vcentered">{todo.id}</td>
      <td className="is-vcentered">
        {todo.completed && (
          <span className="icon" data-cy="iconCompleted">
            <i className="fas fa-check" />
          </span>
        )}
      </td>
      <td className="is-vcentered is-expanded">
        <p
          style={todo.completed ? { color: 'green' } : undefined}
          className={todo.completed ? '' : 'has-text-danger'}
        >
          {todo.title}
        </p>
      </td>
      <td className="has-text-right is-vcentered">
        <button
          data-cy="selectButton"
          className="button"
          type="button"
          onClick={() => {
            setSelect(true);
            setSelectedTodo(todo);
          }}
        >
          {select ? (
            <span className="icon">
              <i className="far fa-eye-slash" />
            </span>
          ) : (
            <span className="icon">
              <i className="far fa-eye" />
            </span>
          )}
        </button>
      </td>
    </tr>
  );
};
