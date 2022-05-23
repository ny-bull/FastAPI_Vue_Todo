<template>
  <div class="sign relative mt-16">
    <div class="absolute w-screen -top-16">
      <img
        src="@/assets/img/login_logo.webp"
        alt="Logo"
        class="w-1/6 lg:w-36 xl:w-1/12 rounded-full mx-auto"
      />
    </div>
    <div class="bg-white 2/5 xl:w-1/4 lg:w-1/3 mx-auto pt-16 pb-8 rounded-lg">
      <div>
        <!-- <label for="mail" class="p-8">メールアドレス</label> -->
        <input
          class="border border-black rounded-md bg-slate-50 mb-3 px-2 py-1 w-3/5"
          type="text"
          id="mail"
          placeholder="Email ID"
          v-model.lazy="signInfo.email"
        />
      </div>

      <div>
        <!-- <label for="password">password</label> -->
        <input
          class="border border-black rounded-md bg-slate-50 px-2 py-1 w-3/5"
          type="password"
          id="password"
          placeholder="Password"
          v-model.lazy="signInfo.password"
        />
      </div>
      <button
        class="rounded-md bg-slate-200 px-2 mt-8 w-4/5 py-2 text-slate-400"
        @click="submit()"
      >
        {{ isNew ? 'SignUp' : 'SignIn' }}
      </button>
    </div>
    <!--debug-->
    <p>{{ signInfo }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Auth from '../api/auth'



@Component
export default class SignForm extends Vue {
  @Prop()
  isNew!: boolean

  signInfo = {
    email: '',
    password: '',
  }

  submit() {
    if (this.isNew) {
      this.$store.dispatch("UserModule/register",this.signInfo)
    this.$router.push("/todo")
      } else {
      this.$store.dispatch('UserModule/login', this.signInfo)
      this.$router.push('/todo')
    }

  }
}
</script>

<style>
input {
  border-color: rgb(0 0 0);
  border-style: solid;
}
</style>
