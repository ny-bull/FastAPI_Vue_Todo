<template>
  <div id="app">
    <nav class="pb-6">
      <router-link to="/">User</router-link> |
      <router-link to="/todo">Todo</router-link>
    </nav>
    <router-view />
  </div>
</template>
