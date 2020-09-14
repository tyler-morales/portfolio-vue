<template>
  <section class="process-section">
    <div>
      <h3 class="section-header">Design</h3>
      <p>{{ design.description }}</p>
    </div>
    <div class="container">
      <Moodboard :moodboard="moodboard" />
      <UI :ui="ui" />
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
      type: Array,
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
  // grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @include breakpoint(sm) {
    grid-template-columns: 1fr;
  }
}
</style>
