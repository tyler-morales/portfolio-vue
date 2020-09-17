<template>
  <div class="case-study" :class="{ flip: caseStudy.reverse }">
    <div class="case-study__text">
      <span class="project-type">{{ caseStudy.type }}</span>
      <h2>{{ caseStudy.title }}</h2>
      <h4>{{ caseStudy.description }}</h4>
      <div class="case-study__text__tags">
        <span
          class="case-study__text__tags--tag"
          v-for="(tag, index) in caseStudy.tags"
          :key="index"
          >{{ tag }}</span
        >
      </div>
      <router-link :to="caseStudy.path">
        <span id="view-project" class="link--view-project"
          >View Project
          <arrow-right-icon size="1.25x" class="icon"></arrow-right-icon>
        </span>
      </router-link>
    </div>
    <picture loading="lazy" class="case-study--img">
      <source type="image/webp" :srcset="caseStudy.webp" />
      <img :src="caseStudy.image" />
    </picture>
  </div>
</template>

<script>
import { ArrowRightIcon } from 'vue-feather-icons'

export default {
  props: {
    caseStudy: {
      type: Object,
      required: true
    }
  },
  components: {
    ArrowRightIcon
  },
  data() {
    return {
      window: {
        width: 0
      }
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    this.caseStudy.reverse = false
  },
  methods: {
    handleResize() {
      if (window.innerWidth >= 992) {
        this.caseStudy.reverse = true
      } else {
        this.caseStudy.reverse = false
      }
    }
  },
  mounted() {
    //Init
    this.caseStudy.reverse = true
  }
}
</script>

<style lang="scss" scoped>
.case-study {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 100px;

  h4 {
    font-weight: 400;
  }

  @include breakpoint(md) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 30px;
  }

  &__text {
    max-width: 400px;
    display: grid;
    gap: 15px;
    justify-content: center;

    @include breakpoint(md) {
      justify-items: center;
      margin: 0 auto;
      max-width: 100%;
      gap: 10px;
    }

    &__tags {
      display: flex;
      align-items: center;
      margin: 15px 0;
      flex-wrap: wrap;
      gap: 20px;

      @include breakpoint(md) {
        justify-content: center;
      }

      &--tag {
        background-color: Rgba($color-secondary / $lighten);
        color: Rgb($color-secondary);
        padding: 8px 15px;
        border-radius: 15px;
      }
    }
  }

  &--img {
    max-width: 420px;
    height: auto;

    @include breakpoint(md) {
      max-width: 100%;
    }
  }
}

.flip {
  flex-direction: row-reverse;
}
</style>
