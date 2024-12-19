import { SORT_FIELD } from "../../App"

export const getPreperedTodos = (todos, {query, sortField}) => {
    let preperedTodo = [...todos]

    const normalizedQuery = query.trim().toLowerCase()

    if (normalizedQuery) {
      preperedTodo = preperedTodo.filter(todo => (
        todo.title.toLowerCase().includes(normalizedQuery)
      ))
    }

    if (sortField) {
      preperedTodo = preperedTodo.filter(preperedTodo => {
        switch (sortField) {
          case SORT_FIELD.COMPLEATED_TRUE:
            return preperedTodo.completed === true

          case SORT_FIELD.COMPLEATED_FALSE:
            return preperedTodo.completed === false

          default:
            return true
        }
      })
    }

    return preperedTodo
  }
