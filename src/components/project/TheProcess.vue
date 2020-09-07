<template>
  <section class="process">
    <h3 class="section-header">The Process</h3>
    <h2>Building Smart</h2>
    <p>{{ process.description }}</p>
  </section>
</template>

<script>
export default {
  props: {
    process: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.process {
  // text-align: center;
}
</style>
