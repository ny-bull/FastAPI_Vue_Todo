<template>
  <div class="sign relative mt-16">
    <div class="absolute w-screen -top-16">
    </div>
    <div class="bg-white 2/5 xl:w-1/4 lg:w-1/3 mx-auto pt-16 pb-8 rounded-lg">
      <div>
        <!-- <label for="mail" class="p-8">メールアドレス</label> -->
        <input
          class="border border-black rounded-md bg-slate-50 mb-3 px-2 py-1 w-3/5"
          type="text"
          id="mail"
          placeholder="Email ID"
        />
      </div>

      <div>
        <!-- <label for="password">password</label> -->
        <input
          class="border border-black rounded-md bg-slate-50 px-2 py-1 w-3/5"
          type="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <button
        class="rounded-md bg-slate-200 px-2 mt-8 w-4/5 py-2 text-slate-400"
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

  get todos(){
    return this.$store.state.TodosModule.todos
  }
}
</script>