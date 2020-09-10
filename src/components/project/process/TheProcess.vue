<template>
  <section class="process">
    <h3 class="section-header">The Process</h3>
    <h2>Building Smart</h2>
    <p>{{ process.description }}</p>
    <!-- SCOPE -->
    <Scope :scope="scope" />
  </section>
</template>

<script>
import Scope from '@/components/project/process/Scope'

export default {
  props: {
    process: {
      type: Object,
      required: true
    },
    scope: {
      type: Array,
      required: true
    }
  },
  components: {
    Scope
  }
}
</script>

<style lang="scss" scoped></style>
