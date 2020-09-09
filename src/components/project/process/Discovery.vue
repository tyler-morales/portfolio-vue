<template>
  <section>
    <h3 class="section-header">Discovery</h3>
    <p>{{ discovery.description }}</p>
    <Objectives :objectives="objectives" />
  </section>
</template>

<script>
import Objectives from '@/components/project/process/Objectives'
export default {
  components: {
    Objectives
  },
  props: {
    discovery: {
      type: Object,
      required: false
    },
    objectives: {
      type: Object,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped></style>
