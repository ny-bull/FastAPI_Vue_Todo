<template>
  <div>
    <div v-for="(todo, index) in todos" :key="todo.id" class="py-4">
      <p v-if="!isEditing[index]" class="text-center">
        {{ todo.title }} : {{ todo.description }}
        <font-awesome-icon
          @click="deleteTodo(todo)"
          icon="fa-solid fa-trash"
          class="ml-4"
        />
        <font-awesome-icon
          icon="fa-solid fa-pen"
          class="ml-4"
          @click="changeMode(index, true)"
        />
      </p>
      <div v-if="isEditing[index]">
        <input type="text" :value="todo.title" :ref="todo.id" />
        <textarea type="text" :value="todo.description" :ref="todo.id" />
        <div>
          <button @click="putTodo(todo.id, index)">保存</button>
          <button type="button" @click="changeMode(index, false)">
            キャンセル
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TodoList extends Vue {
  isEditing = []

  mounted() {
    this.$store
      .dispatch('TodosModule/get', this.$store.state.UserModule.userId)
      .then(() => {
        for (
          let index = 0;
          index < this.$store.getters['TodosModule/size'];
          index++
        ) {
          this.$set(this.isEditing, index, false)
        }
      })
  }
  get userId() {
    return this.$store.getters.UserModule.userId
  }

  get todos() {
    return this.$store.state.TodosModule.todos
  }

  deleteTodo(todo) {
    this.$store.dispatch('TodosModule/delete', todo).then(() => {
      this.$store.dispatch(
        'TodosModule/get',
        this.$store.state.UserModule.userId
      )
    })
  }

  putTodo(todoId, index) {
    const editedTodo = {
      id: todoId,
      title: this.$refs[todoId][0].value,
      description: this.$refs[todoId][1].value,
      ownerId: this.$store.state.UserModule.userId,
    }
    this.$store.dispatch('TodosModule/put', editedTodo).then(() => {
      console.log('calling put')
      console.log(editedTodo)
      this.$store.dispatch(
        'TodosModule/get',
        this.$store.state.UserModule.userId
      )
      this.changeMode(index, false)
    })
  }

  changeMode(index, mode) {
    this.$set(this.isEditing, index, mode)
  }
}
</script>
