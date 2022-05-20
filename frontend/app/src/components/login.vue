<template>
  <div class="login">
    <h1>Login</h1>
    <div class="form">
      <div>
        <label for="mail" class="pt-8">メールアドレス</label>
        <br />
        <input
          class="border border-black rounded-md mb-4"
          type="text"
          id="mail"
          v-model.lazy="loginInfo.mail"
        />
      </div>

      <div>
        <label for="password">password</label>
        <br />
        <input
          class="border border-black rounded-md mb-4"
          type="password"
          id="password"
          v-model.lazy="loginInfo.password"
        />
      </div>
    </div>
    <p>{{ loginInfo }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  data() {
    return {
      loginInfo: { mail: '', password: '' },
    }
  },
})
export default class Login extends Vue {}
</script>

<style>
div {
}
input {
  border-color: rgb(0 0 0);
  border-style: solid;
}
</style>
