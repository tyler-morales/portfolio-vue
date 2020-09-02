<template>
  <div class="home">
    <Hero />
  </div>
</template>

<script>
import Hero from '@/components/Hero'
export default {
  name: 'Home',
  components: {
    Hero
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding-top: 150px;

  @include breakpoint(sm) {
    padding-top: 75px;
  }
}
</style>
