<template>
  <section class="hero">
    <span class="project-type">{{ hero.type }}</span>
    <h1>{{ hero.name }}</h1>
    <h3>{{ hero.description }}</h3>
    <router-link :to="hero.link">
      <span id="view-project" class="link--view-project"
        >View Case Study
        <arrow-right-icon size="1.25x" class="icon"></arrow-right-icon>
      </span>
    </router-link>
    <picture class="hero--img">
      <source type="image/webp" :srcset="hero.webp" />
      <img :src="hero.image" :alt="hero.name" />
    </picture>
  </section>
</template>

<script>
import { ArrowRightIcon } from 'vue-feather-icons'
export default {
  props: {
    hero: { type: Object, required: false }
  },
  components: {
    ArrowRightIcon
  }
}
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 50px;

  @include breakpoint(sm) {
    padding: 20px;
    background: #fff;
    text-align: center;
  }

  &--img {
    margin-top: 40px;
    max-width: 1000px;
    width: 100%;
    height: auto;
  }
}
</style>
