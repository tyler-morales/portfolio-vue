<template>
  <section class="process-section">
    <div>
      <h3 class="section-header">Strategy</h3>
      <p>{{ strategy.description }}</p>
    </div>
    <StackedCards :strategy="strategy" />
  </section>
</template>

<script>
import StackedCards from '@/components/project/process/StackedCards'

export default {
  props: {
    strategy: {
      type: Object,
      required: false
    }
  },
  components: {
    StackedCards
  }
}
</script>

<style lang="scss" scoped></style>
