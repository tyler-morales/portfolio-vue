<template>
  <section class="process-section">
    <div>
      <h3 class="section-header">Design</h3>
      <p>{{ design.description }}</p>
    </div>
    <div class="container">
      <UI :ui="ui" />
      <Moodboard :moodboard="moodboard" />
    </div>
  </section>
</template>

<script>
import UI from '@/components/project/process/UI'
import Moodboard from '@/components/project/process/Moodboard'

export default {
  props: {
    design: {
      type: Object,
      required: false
    },
    ui: {
      type: Object,
      required: false
    },
    moodboard: {
      type: Object,
      required: false
    }
  },
  components: {
    UI,
    Moodboard
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;

  @include breakpoint(sm) {
    grid-template-columns: 1fr;
  }
}
</style>
