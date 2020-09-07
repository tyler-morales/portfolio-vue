<template>
  <section id="solution" class="solution">
    <h3 class="section-header">Solution</h3>
    <h3>{{ solution.title }}</h3>
    <p>{{ solution.description }}</p>
  </section>
</template>

<script>
export default {
  props: {
    solution: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.solution {
  max-width: 50vw;

  @include breakpoint(lg) {
    max-width: 100%;
  }
}
h3 {
  padding-bottom: 20px;
  border-bottom: 1px solid black;
}
</style>
