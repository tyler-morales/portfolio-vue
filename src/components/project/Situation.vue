<template>
  <section class="situation">
    <h3 class="section-header">The Situation</h3>
    <p>{{ situation.description }}</p>
    <h5>{{ situation.org }}</h5>
  </section>
</template>

<script>
export default {
  props: {
    situation: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.situation {
  p {
    font-size: 80px;
    line-height: 97px;
    margin-bottom: 40px;

    @include breakpoint(md) {
      font-size: 50px;
      line-height: 60px;
    }

    @include breakpoint(sm) {
      font-size: 22px;
      line-height: 30px;
    }
  }
}
</style>
