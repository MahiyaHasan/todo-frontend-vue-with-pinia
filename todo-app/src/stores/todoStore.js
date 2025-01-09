// src/stores/todoStore.js
import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    todos: [],
  }),
  actions: {
    addTodo(todo) {
      this.todos.push({ id: Date.now(), text: todo, completed: false });
    },
    toggleTodo(id) {
        const index = this.todos.findIndex((t) => t.id === id);
        if (index !== -1) {
          // Create a new object with updated properties and reassign it
          this.todos[index] = { ...this.todos[index], completed: !this.todos[index].completed };
        }
      },
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
  },
});
