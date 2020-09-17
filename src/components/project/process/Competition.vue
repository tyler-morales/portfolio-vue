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
      <vue-glide-slide v-for="(competitor, index) in competition" :key="index">
        <h4>{{ competitor.name }}</h4>
        <p>{{ competitor.description }}</p>
        <img :src="competitor.image" />
        <figcaption>
          <a target="_blank" :href="competitor.link">{{ competitor.name }}</a>
        </figcaption>
        <h6>Key Insights</h6>
        <ul class="tags">
          <li
            class="tag"
            v-for="(tag, index) in competitor.keyFeatures"
            :key="index"
          >
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
    if (window.innerWidth <= 800) {
      this.peek.after = 0
    }
  }
}
</script>

<style lang="scss" scoped>
//glide.js slider
.glide {
  margin-top: 50px;
  max-width: 70vw;

  @include breakpoint(md) {
    // padding: 5px;
    max-width: 90vw;
  }

  // individual slide
  .glide__slide {
    padding: 20px;
    border-radius: 15px;
    border: 2px solid black;
    height: auto;

    h4 {
      font-weight: 500;
      text-align: center;
    }

    p {
      height: auto;
      min-height: 156px;
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
    font-size: 16px;
    margin-right: 20px;

    &:hover {
      background-color: black;
      color: white;
      margin-top: 30px;
    }
  }
}
</style>
