<template>
  <div class="hero" :style="bgImage">
    <div class="container">
      <div class="text">
        <h1 class="multiline-strikethrough">{{ hero.title }}</h1>
        <h4>{{ hero.description }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hero: {
      type: Object,
      required: true
    }
  },
  computed: {
    bgImage() {
      return {
        backgroundImage: `url(${this.hero.image})`,
        backgrountRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  height: 720px;

  @include breakpoint(md) {
    height: 360px;
  }

  .container {
    height: 100%;
    max-width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 240px;
    align-items: center;

    @include breakpoint(sm) {
      grid-template-columns: 1fr;
      gap: 0;
      text-align: center;
    }

    .text {
      max-width: 600px;
      grid-column: 2;
      color: var(--white);
      line-height: 75px;

      h4 {
        margin-top: 30px;
      }
    }
  }
}

// .multiline-strikethrough {
//   display: inline;
//   // font-size: 4rem;
//   // line-height 1em;
//   background-image: linear-gradient(
//     transparent 0.8ex,
//     Rgb($color-secondary) 0.8ex,
//     Rgb($color-secondary) 1.5ex,
//     transparent 1.5ex
//   );
// }
</style>
