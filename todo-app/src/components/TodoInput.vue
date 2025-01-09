<!-- src/components/TodoInput.vue -->
<template>
  <div>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a todo" />
    <button @click="addTodo">Add</button>
  </div>
</template>

<script>
import { useTodoStore } from "../stores/todoStore";
export default {
  data() {
    return { newTodo: "" };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        const todoStore = useTodoStore();
        todoStore.addTodo(this.newTodo);
        this.newTodo = "";
      }
    },
  },
};
</script>
