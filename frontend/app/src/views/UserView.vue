<template>
  <div class="home">
    <login-view v-if="register"></login-view>
    <button @click="changeLogin()">Login</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import loginView from '@/components/login.vue'

@Component({
  data() {
    return {
      register: false,
    }
  },
  methods: {
    changeLogin(): void {
      console.log(this.register)
      this.register = !this.register
    },
  },
  components: {
    loginView,
  },
})
export default class HomeView extends Vue {}
</script>

<style>
#app {
  font-family: font-mono;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
