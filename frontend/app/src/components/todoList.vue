<template>
<div>
    {{userId}}
</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TodoList extends Vue {
  get userId() {
    return this.$store.state.UserModule.userId
  }

  get todos(){
    return this.$store.state.TodosModule.todos
  }
}
</script>