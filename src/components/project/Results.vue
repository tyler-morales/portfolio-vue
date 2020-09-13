<template>
  <section>
    <h3 class="section-header">Results</h3>
    <h3>Letting the Results Speak for Themselves</h3>
    <img :src="results.image" alt="" />
    <Lighthouse :lighthouse="lighthouse" />
  </section>
</template>

<script>
import Lighthouse from '@/components/project/Lighthouse'
export default {
  props: {
    results: { type: Object, required: false },
    lighthouse: { type: Array, required: false }
  },
  components: {
    Lighthouse
  }
}
</script>

<style lang="scss" scoped></style>
