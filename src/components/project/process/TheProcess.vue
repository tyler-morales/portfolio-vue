<template>
  <section class="process">
    <h3 class="section-header">The Process</h3>
    <h2>Building Smart</h2>
    <p>{{ process.description }}</p>
    <!-- SCOPE -->
    <Scope :scope="scope" />
    <!-- Vue Glide -->
    <!-- <vue-glide
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
    </vue-glide> -->
    <!-- Vue Glide -->
  </section>
</template>

<script>
import Scope from '@/components/project/process/Scope'

export default {
  props: {
    process: {
      type: Object,
      required: true
    },
    scope: {
      type: Array,
      required: true
    }
  },
  components: {
    Scope
  }
  // data() {
  // return {
  //   cards: [
  //     { background: '#00659d' },
  //     { background: '#00abbc' },
  //     { background: '#e2c58a' },
  //     { background: '#fc8890' },
  //     { background: '#b35d7f' }
  //   ],
  //   gap: 30,
  //   perView: 2,
  //   breakpoints: {
  //     1024: {
  //       perView: 2
  //     },
  //     768: {
  //       perView: 1
  //     }
  //   },
  //   peek: {
  //     before: 0,
  //     after: 100
  //   }
  // }
  // }
}
</script>

<style lang="scss" scoped>
.process {
  //glide.js slider
  .glide {
    margin-top: 50px;
    max-width: 70vw;

    @include breakpoint(sm) {
      padding: 5px;
      max-width: 90vw;
    }

    // individual slide
    .glide__slide {
      border-radius: 15px;
      border: 2px solid black;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      height: 500px;
    }

    // control button
    [data-glide-dir] {
      padding: 8px 15px;
      border: 2px solid black;
      transition: all 0.3s;
      margin-top: 30px;
      margin-right: 20px;
      font-size: 16px;

      &:hover {
        background-color: black;
        color: white;
      }
    }
  }
}
</style>
