<template>
  <div>
    <h3 class="section-header">Summary</h3>
    <p>{{ summary.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    summary: { type: Object, required: false }
  }
}
</script>

<style lang="scss" scoped></style>
