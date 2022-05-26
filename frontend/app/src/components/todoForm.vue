<template>
  <div class="mt-2 mb-4">
    <div class="bg-white w-1/2 mx-auto rounded-lg">
      <div class="py-4">
        <label for="title" class="px-4">タイトル</label>
        <input
          class="border border-black rounded-md bg-slate-50 w-3/5"
          type="text"
          id="title"
          placeholder="Title"
          v-model.lazy="todoInfo.title"
        />
      </div>

      <div class="">
        <label for="description" class="align-top px-4 mx-4">詳細</label>
        <textarea
          class="border border-black rounded-md bg-slate-50 w-3/5"
          id="description"
          placeholder="Description"
          v-model.lazy="todoInfo.description"
        />
      </div>
      <button
        class="rounded-md bg-slate-200 px-2 my-4 w-2/5 py-2 text-slate-800 disabled:opacity-25"
        :disabled="!todoInfo.title || !todoInfo.description"
        @click="submit()"
      >
        登録
      </button>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TodoForm extends Vue {
  get userId() {
    return this.$store.state.UserModule.userId
  }

  get todos() {
    return this.$store.state.TodosModule.todos
  }

  todoInfo = {
    title: '',
    description: '',
    userId: this.userId,
  }

  submit() {
    this.$store.dispatch('TodosModule/post', this.todoInfo).then(() => {
      this.$store.dispatch(
        'TodosModule/get',
        this.$store.state.UserModule.userId
      )
      this.todoInfo.title = ''
      this.todoInfo.description = ''
    })
  }
}
</script>
