<!-- src/components/TodoList.vue -->
<template>
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
        :class="{ completed: todo.completed,'not-completed': !todo.completed }"
      >
        <input type="checkbox" v-model="todo.completed" @click.once="toggle(todo.id)" />
        {{ todo.text }}
        <button @click="remove(todo.id)">Delete</button>
      </li>
    </ul>
  </template>
  
  <script>
  import { useTodoStore } from "../stores/todoStore";
  export default {
    computed: {
      todos() {
        const todoStore = useTodoStore();
        return todoStore.todos;
      },
    },
    methods: {
      toggle(id) {
        const todoStore = useTodoStore();
        todoStore.toggleTodo(id);
      },
      remove(id) {
        const todoStore = useTodoStore();
        todoStore.removeTodo(id);
      },
    },
  };
  </script>
  
  <style>
  .completed {
    text-decoration: line-through;
    color: gray;
  }
  </style>
  