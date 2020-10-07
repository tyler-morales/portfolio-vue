<template>
  <section class="intro" data-aos="fade-up">
    <h2 class="intro--title">{{ intro.title }}</h2>
    <p>{{ intro.description }}</p>
  </section>
</template>

<script>
export default {
  props: {
    intro: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.intro {
  max-width: 830px;
  text-align: center;
  margin: 0 auto;

  @include breakpoint(md) {
    text-align: left;
    width: auto;
  }

  &--title {
    font-size: 80px;
    line-height: 1.0625;
    margin-bottom: 30px;

    @include breakpoint(md) {
      font-size: 60px;
      font-weight: 500;
    }

    @include breakpoint(sm) {
      font-size: 25px;
    }
  }
}
</style>
