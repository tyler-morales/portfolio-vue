<template>
  <div class="objectives">
    <h3>Client Objectives</h3>
    <div class="objetive-container">
      <ul>
        <h4 class="list--header">Problems/ Goals</h4>
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
.objectives {
  margin-top: 100px;

  @include breakpoint(sm) {
    margin-top: 50px;
  }
}
.objetive-container {
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

  li {
    color: Rgba($color-primary / $semi-light);
  }
}
</style>
