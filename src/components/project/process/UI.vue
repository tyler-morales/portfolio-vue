<template>
  <div>
    <h3>Design System</h3>
    <div v-for="(img, index) in ui" :key="index">
      <div>
        <img :src="img.image" alt="" />
        <h5>{{ img.description }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ui: {
      type: Array,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
h5 {
  margin: 20px 0;
}
</style>
