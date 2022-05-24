<template>
  <div class="todo">
    <todo-list></todo-list>
    <todo-form></todo-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import TodoList from '@/components/todoList.vue'
import TodoForm from '@/components/todoForm.vue'

@Component({
  components: {
    TodoList,
    TodoForm
  },
})
export default class TodoView extends Vue {}
</script>
