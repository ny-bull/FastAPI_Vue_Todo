<template>
  <div class="login">
    <h1>This is loginPage</h1>
    <label>メールアドレス</label>
    <input type="text" />
    <br />

    <label>password</label>
    <input type="password" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  data: {
    mail: '',
  },
  components: {},
})
export default class Login extends Vue {}
</script>
