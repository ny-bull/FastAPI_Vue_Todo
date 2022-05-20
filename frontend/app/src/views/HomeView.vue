<template>
  <div class="home">
    <login-view></login-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import loginView from '@/components/login.vue'

@Component({
  components: {
    loginView,
  },
})
export default class HomeView extends Vue {}
</script>
