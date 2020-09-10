<template>
  <section class="process-section">
    <div>
      <h3 class="section-header">Discovery</h3>
      <p>{{ discovery.description }}</p>
    </div>
    <Objectives :objectives="objectives" />
    <Competition :competition="competition" />
  </section>
</template>

<script>
import Objectives from '@/components/project/process/Objectives'
import Competition from '@/components/project/process/Competition'
export default {
  components: {
    Objectives,
    Competition
  },
  props: {
    discovery: {
      type: Object,
      required: false
    },
    objectives: {
      type: Object,
      required: false
    },
    competition: {
      type: Array,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped></style>
