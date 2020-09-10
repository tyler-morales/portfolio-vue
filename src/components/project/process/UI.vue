<template>
  <div>
    <h4>Design System</h4>
    <img :src="ui.image" alt="" />
    <h5>{{ ui.description }}</h5>
  </div>
</template>

<script>
export default {
  props: {
    ui: {
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
