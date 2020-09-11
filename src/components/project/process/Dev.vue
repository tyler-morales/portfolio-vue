<template>
  <section class="process-section">
    <div>
      <h3 class="section-header">Development</h3>
      <h3>Putting it all together</h3>
      <p>{{ dev.description }}</p>
    </div>
    <Technologies :technologies="technologies" />
  </section>
</template>

<script>
import Technologies from '@/components/project/process/Technologies'

export default {
  props: {
    dev: { type: Object, required: false },
    technologies: { type: Object, required: false }
  },
  components: {
    Technologies
  }
}
</script>

<style lang="scss" scoped></style>
