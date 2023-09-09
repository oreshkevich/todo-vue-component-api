import {createStore} from 'vuex';
import {v4 as uuidv4} from 'uuid';
import {AppState, Filter, Todo} from '@/types';

export default createStore({
  state: {
    todos: [
      {id: uuidv4(), title: 'Тестовое задание', isActive: true},
      {id: uuidv4(), title: 'Прекрасный код', isActive: false},
      {id: uuidv4(), title: 'Покрытие тестами', isActive: true},
    ],
    filter: 0,
  },
  getters: {
    todos: (state) => state.todos,
    filter: (state) => state.filter,
  },
  mutations: {
    set_todos(state, action) {
      state.todos = action;
    },

    add_todo(state, action) {
      state.todos = [...state.todos, action];
    },

    change_active(state, action) {
      const todo = state.todos.find((item) => item.id === action) as Todo;
      todo.isActive = !todo.isActive;
    },

    set_filter(state, action) {
      state.filter = action;
    },
  },
  actions: {
    setTodos({commit}, value) {
      commit('set_todos', value);
    },
    addTodo({commit}, value) {
      commit('add_todo', value);
    },
    changeActive({commit}, value) {
      commit('change_active', value);
    },
    setFilter({commit}, value) {
      commit('set_filter', value);
    },
  },
  modules: {},
});

