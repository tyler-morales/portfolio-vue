<template>
  <div>
    <h3>Moodboard</h3>
    <img :src="moodboard.image" alt="moodboard" />
    <h5>{{ moodboard.description }}</h5>
  </div>
</template>

<script>
export default {
  props: {
    moodboard: {
      type: Object,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
h5 {
  margin-top: 20px;
}
</style>
