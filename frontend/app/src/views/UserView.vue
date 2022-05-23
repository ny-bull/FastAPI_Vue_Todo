<template>
  <div class="user">
    <!-- <button @click="changeMode()">{{isNew ? "SignIn" : "SignUp"}}</button> -->
    <SignForm :is-new="isNew"></SignForm>
    <button @click="changeMode()" class="mb-8 text-yellow-200">
      {{ isNew ? 'Already member here!' : 'Not yet member here' }}
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SignForm from '@/components/signForm.vue'

@Component({
  components: {
    SignForm,
  },
})
export default class UserView extends Vue {
  public isNew = true
  changeMode() {
    this.isNew = !this.isNew
  }
}
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
