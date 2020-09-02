<template>
  <section class="hero">
    <span class="project-type">Web app</span>
    <h1>ISS Tracker</h1>
    <h3>A real time satellite tracker</h3>
    <router-link to="/projects/01_project">
      <span id="view-project" class="link--view-project"
        >View Case Study
        <arrow-right-icon size="1.25x" class="icon"></arrow-right-icon>
      </span>
    </router-link>
    <img
      src="../assets/images/iss_tracker/iss_mockup_imac.png"
      class="hero--img"
      alt="International Space Station Tracker Image Mockup"
    />
  </section>
</template>

<script>
import { ArrowRightIcon } from 'vue-feather-icons'
export default {
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
