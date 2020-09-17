<template>
  <section>
    <h3 class="section-header">Results</h3>
    <h3>Letting the Results Speak for Themselves</h3>
    <picture>
      <source type="image/webp" :srcset="results.webp" />
      <img :src="results.image" />
    </picture>
    <Screens :screens="screens" />
    <Lighthouse :lighthouse="lighthouse" :results="results" />
  </section>
</template>

<script>
import Lighthouse from '@/components/project/Lighthouse'
import Screens from '@/components/project/Screens'
export default {
  props: {
    results: { type: Object, required: false },
    lighthouse: { type: Array, required: false },
    screens: { type: Array, required: false }
  },
  components: {
    Lighthouse,
    Screens
  }
}
</script>

<style lang="scss" scoped></style>
