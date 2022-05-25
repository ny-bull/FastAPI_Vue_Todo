<template>
  <div class="todo">
    <todo-list></todo-list>
    <todo-form></todo-form>
    <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
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
