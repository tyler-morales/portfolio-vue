<template>
  <div class="hero" :style="bgImage">
    <div class="container">
      <div class="text">
        <h1 class="multiline-strikethrough">{{ hero.title }}</h1>
        <h4>{{ hero.subTitle }}</h4>
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
  data() {
    return {
      window: {
        width: 0
      },
      bgImage: ''
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  methods: {
    handleResize() {
      if (window.innerWidth <= 600) {
        this.bgImage = `backgroundImage: linear-gradient(to bottom,rgba(245, 246, 252, 0) 45%,rgb(0, 0, 0) 100%), url(${this.hero.image})`
      } else {
        this.bgImage = `backgroundImage: url(${this.hero.image})`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  height: 900px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @include breakpoint(xl) {
    height: 720px;
  }
  @include breakpoint(md) {
    height: 360px;
  }

  .container {
    height: 100%;
    max-width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 440px;
    align-items: center;

    @include breakpoint(xl) {
      gap: 340px;
    }

    @include breakpoint(md) {
      gap: 240px;
    }

    @include breakpoint(sm) {
      grid-template-columns: 1fr;
      gap: 0;
      align-content: end;
      text-align: center;
    }

    .text {
      max-width: 600px;
      grid-column: 2;
      color: var(--white);
      line-height: 75px;

      @include breakpoint(sm) {
        grid-column: 1;
      }

      h4 {
        margin-top: 30px;
        font-weight: 400;
      }
    }
  }
}
</style>
