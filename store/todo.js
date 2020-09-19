// 데이터
export const state = () => ({
  todos: [
    { id: 0, text: 'buy a car', checked: false },
    { id: 1, text: 'study vuejs', checked: false },
    { id: 2, text: 'go to home', checked: false },
  ],
})
// 동기처리
export const mutations = {
  addTodoCommit(state, value) {
    state.todos.push({
      id: Math.random(),
      text: value,
      checked: false,
    })
  },
  deleteTodoCommit(state, todoId) {
    const index = state.todos.findIndex((todo) => {
      return todo.id === todoId
    })
    state.todos.splice(index, 1)
  },
  toggleTodoCommit(state, { id, checked }) {
    const index = state.todos.findIndex((todo) => {
      return todo.id === id
    })
    state.todos[index].checked = checked
  },
}
// 비동기 처리
export const actions = {
  addTodo({ commit }, value) {
    setTimeout(() => commit('addTodoCommit', value), 300)
  },
  toggleTodo({ commit }, payload) {
    setTimeout(() => commit('toggleTodoCommit', payload), 300)
  },
  deleteTodo({ commit }, todoId) {
    setTimeout(() => commit('deleteTodoCommit', todoId), 300)
  },
}
export const getters = {
  numberOfCompletedTodo: (state) => {
    return state.todos.filter((todo) => todo.checked).length
  },
}
