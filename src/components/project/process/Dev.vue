<template>
  <section class="process-section">
    <div>
      <h3 class="section-header">Development</h3>
      <h3>Putting it all together</h3>
      <p>{{ dev.description }}</p>
    </div>
    <Technologies :technologies="technologies" />
    <Features :features="features" />
  </section>
</template>

<script>
import Technologies from '@/components/project/process/Technologies'
import Features from '@/components/project/process/Features'

export default {
  props: {
    dev: { type: Object, required: false },
    technologies: { type: Array, required: false },
    features: { type: Array, required: false }
  },
  components: {
    Technologies,
    Features
  }
}
</script>

<style lang="scss" scoped></style>
