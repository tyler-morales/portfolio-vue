<template>
  <div class="objectives">
    <h3>Client Objectives</h3>
    <div class="objetive-container">
      <ul>
        <h4 class="list--header">Problems</h4>
        <li v-for="(item, index) in objectives.goals" :key="index">
          {{ item }}
        </li>
      </ul>
      <ul>
        <h4 class="list--header">Solutions/ Features</h4>
        <li v-for="(item, index) in objectives.solutions" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    objectives: {
      type: Object,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.objetive-container {
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(430px, 1fr));

  @include breakpoint(sm) {
    grid-template-columns: 1fr;
  }

  li {
    color: Rgba($color-primary / $semi-light);
    list-style-type: circle;
    list-style-position: inside;
  }
}
</style>
