import React, { useEffect } from 'react';
import { Loader } from '../Loader';
import { getUser } from '../../api';

export const TodoModal: React.FC = ({
  setSelect,
  todalModalLoading,
  setTodalModalLoading,
  setTodos,
  selectedTodo,
  setSelectedTodo,
}) => {
  useEffect(() => {
    setTodalModalLoading(true);

    getUser(selectedTodo.userId)
      .then(setTodos)
      .finally(() => setTodalModalLoading(false));
  }, [selectedTodo.userId, setTodalModalLoading, setTodos]);

  return (
    <div className="modal is-active" data-cy="modal">
      <div className="modal-background" />

      {todalModalLoading ? (
        <Loader />
      ) : (
        <div className="modal-card">
          <header className="modal-card-head">
            <div
              className="modal-card-title has-text-weight-medium"
              data-cy="modal-header"
            >
              Todo #{selectedTodo.id}
            </div>

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              type="button"
              className="delete"
              data-cy="modal-close"
              onClick={() => {
                setSelect(false);
                setTodalModalLoading(true);
                setSelectedTodo('');
              }}
            />
          </header>

          <div className="modal-card-body">
            <p className="block" data-cy="modal-title">
              {selectedTodo.title}
            </p>

            <p className="block" data-cy="modal-user">
              {selectedTodo.completed ? (
                <strong className="has-text-success">Done</strong>
              ) : (
                <strong className="has-text-danger">Planned</strong>
              )}

              {' by '}

              <a href="mailto:Sincere@april.biz">Leanne Graham</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
