<template>
  <section class="process">
    <h3 class="section-header">The Process</h3>
    <h2>Building Smart</h2>
    <p>{{ process.description }}</p>

    <!-- Vue Glide -->
    <vue-glide
      :gap="gap"
      :breakpoints="breakpoints"
      :perView="perView"
      :peek="peek"
    >
      <vue-glide-slide
        :style="{ background: card.background }"
        v-for="(card, index) in cards"
        :key="index"
        >{{ card.background }}</vue-glide-slide
      >
      <template slot="control">
        <button data-glide-dir="<">prev</button>
        <button data-glide-dir=">">next</button>
      </template>
    </vue-glide>
    <!-- Vue Glide -->
  </section>
</template>

<script>
export default {
  props: {
    process: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      cards: [
        { background: '#00659d' },
        { background: '#00abbc' },
        { background: '#e2c58a' },
        { background: '#fc8890' },
        { background: '#b35d7f' }
      ],
      gap: 30,
      perView: 2,
      breakpoints: {
        1024: {
          perView: 2
        },
        768: {
          perView: 1
        }
      },
      peek: {
        before: 0,
        after: 100
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.glide__control {
  border: 2px solid blue;
  color: red;
}

.process {
  .glide {
    margin-top: 50px;
    max-width: 70vw;

    @include breakpoint(sm) {
      padding: 5px;
      max-width: 90vw;
    }
    .glide__slide {
      border-radius: 15px;
      border: 2px solid black;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      height: 500px;
    }

    [data-glide-dir] {
      padding: 8px 15px;
      border: 2px solid black;
      transition: all 0.3s;
      margin-top: 30px;
      margin-right: 20px;

      &:hover {
        background-color: black;
        color: white;
      }
    }
  }
}
</style>
