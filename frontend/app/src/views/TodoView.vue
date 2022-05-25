<template>
  <div class="todo">
    <todo-form></todo-form>
    <todo-list></todo-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TodoList from '@/components/todoList.vue'
import TodoForm from '@/components/todoForm.vue'

@Component({
  components: {
    TodoList,
    TodoForm,
  },
})
export default class TodoView extends Vue {}
</script>
