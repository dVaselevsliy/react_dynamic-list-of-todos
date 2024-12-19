/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';
import { TodoModal } from './components/TodoModal';
import { Loader } from './components/Loader';
import { getTodos } from './api';
import { getPreperedTodos } from './components/HelpFunction/getPreperedTodos';

export const SORT_FIELD = {
  All: 'all',
  COMPLEATED_TRUE: 'true completed',
  COMPLEATED_FALSE: 'false completed'
}

export const App: React.FC = () => {
  const [todos, setTodos] = useState([])
  const [query, setQuery] = useState('')
  const [sortField, setSortField] = useState(SORT_FIELD.All)
  const [select, setSelect] = useState(false)
  const [loading, setLoading] = useState(false)
  const [todalModalLoading, setTodalModalLoading] = useState(true)
  const [selectedTodo, setSelectedTodo] = useState('')

  useEffect(() => {
    setLoading(true)

    getTodos()
      .then(setTodos)
      .finally(() => setLoading(false))
  }, [])

  const visibleTodosQuery = getPreperedTodos(todos, {query, sortField})

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Todos:</h1>

            <div className="block">
              <TodoFilter
                query={query}
                setQuery={setQuery}
                sortField={sortField}
                setSortField={setSortField}
                setSelect={setSelect}
                setLoading={setLoading}
                setSelectedTodo={setSelectedTodo}
                />
            </div>

            <div className="block">
              {loading && (
                <Loader />
              )}
              <TodoList
                todos={visibleTodosQuery}
                setTodos={setTodos}
                select={select}
                setSelect={setSelect}
                loading={loading}
                setLoading={setLoading}
                setSelectedTodo={setSelectedTodo}
                />
            </div>
          </div>
        </div>
      </div>
      {select && selectedTodo && (
        <TodoModal
          select={select}
          setSelect={setSelect}
          todalModalLoading={todalModalLoading}
          setTodalModalLoading={setTodalModalLoading}
          setTodos={setTodos}
          selectedTodo={selectedTodo}
          setSelectedTodo={setSelectedTodo}
          />
        )}
    </>
  );
};
