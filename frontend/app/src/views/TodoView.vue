<template>
  <div class="todo">
    <h1>This is an Todo page</h1>
    {{ userId }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class TodoView extends Vue {
  get userId() {
    return this.$store.state.UserModule.userId
  }
}
</script>
