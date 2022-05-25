<template>
  <div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      class="py-4"
    >
      <p class="text-center">
        {{ todo.title }} : {{ todo.description }} <font-awesome-icon icon="fa-solid fa-trash" />
      </p>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TodoList extends Vue {
  mounted() {
    this.$store.dispatch('TodosModule/get', this.$store.state.UserModule.userId)
  }
  get userId() {
    return this.$store.state.UserModule.userId
  }

  get todos() {
    return this.$store.state.TodosModule.todos
  }
}
</script>
