<template>
  <div>
    <h3>Features & Methodologies</h3>
    <div class="grid">
      <ul class="feature" v-for="(feature, index) in features" :key="index">
        <h4>{{ feature.name }}</h4>
        <p>{{ feature.description }}</p>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    features: { type: Array, required: false }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 2fr));
  gap: 100px;
  margin-top: 50px;

  @include breakpoint(sm) {
    gap: 50px;
  }
}
</style>
