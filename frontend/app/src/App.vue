<template>
  <div id="app">
    <nav class="pb-6">
      <router-link v-show="userId == 0" to="/" class="px-4">User</router-link>
      <router-link v-show="userId != 0" to="/todo" class="px-4">Todo</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { Vue } from 'vue-property-decorator'

export default class AppVue extends Vue {
  get userId() {
    return this.$store.state.UserModule.userId
  }
}
</script>

<style>
body {
  background-color: gainsboro;
}
</style>
