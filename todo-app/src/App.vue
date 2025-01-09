<template>
  <div id="app">
    <h1>Todo App</h1>
    <TodoInput />
    <TodoList />
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

export default {
  components: { TodoInput, TodoList },
};
</script>
