<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
// styles go here
#app {
  height: 2000px;
}
</style>
