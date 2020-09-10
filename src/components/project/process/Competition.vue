<template>
  <div class="competition">
    <h3>Competitive Analysis</h3>
    <!-- Vue Glide -->
    <vue-glide
      :gap="gap"
      :breakpoints="breakpoints"
      :perView="perView"
      :peek="peek"
    >
      <vue-glide-slide
        :style="{ background: card.background }"
        v-for="(card, index) in competition"
        :key="index"
      >
        <h4>{{ card.name }}</h4>
        <p>{{ card.description }}</p>
        <img :src="card.image" />
        <h6>Key Insights</h6>
        <ul class="tags">
          <li class="tag" v-for="(tag, index) in card.keyFeatures" :key="index">
            {{ tag }}
          </li>
        </ul>
      </vue-glide-slide>
      <template slot="control">
        <button data-glide-dir="<">prev</button>
        <button data-glide-dir=">">next</button>
      </template>
    </vue-glide>
    <!-- Vue Glide -->
  </div>
</template>

<script>
export default {
  props: {
    competition: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      cards: [
        { background: '#00659d' },
        { background: '#00abbc' },
        { background: '#e2c58a' }
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
  },
  created() {
    if (window.innerWidth < 768) {
      this.peek.after = 0
    }
  },
  updated() {
    if (window.innerWidth < 768) {
      this.peek.perView = 1
    }
  }
}
</script>

<style lang="scss" scoped>
//glide.js slider
.glide {
  margin-top: 50px;
  max-width: 70vw;

  @include breakpoint(sm) {
    // padding: 5px;
    max-width: 90vw;
  }

  // individual slide
  .glide__slide {
    padding: 20px;
    border-radius: 15px;
    border: 2px solid black;

    h4 {
      font-weight: 500;
      text-align: center;
    }

    img {
      margin-top: 20px;
    }

    h6 {
      color: Rgba($color-primary/ $semi-light);
    }
    .tags {
      display: flex;
      margin-top: 10px;
      gap: 20px;
      flex-wrap: wrap;

      @include breakpoint(sm) {
        flex-direction: column;
        text-align: center;
        gap: 10px;
      }

      .tag {
        font-size: 16px;
        padding: 4px 13px;
        border-radius: 20px;
        background-color: Rgba($color-primary/ $lighten);
        color: Rgb($color-primary);

        @include breakpoint(sm) {
          background: none;
          padding: 0;
        }
      }
    }
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
      margin-top: 30px;
    }
  }
}
</style>
