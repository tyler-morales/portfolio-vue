<template>
  <nav class="nav" :class="{ 'hidden-navbar': !showNavbar }">
    <div class="nav__links">
      <router-link to="/" class="nav__name">
        <span class="title">Tyler Morales</span>
        <span class="sub-title">Front End Developer</span>
      </router-link>
      <router-link to="/" class="nav__about">About</router-link>
      <router-link to="/projects" class="nav__projects">Projects</router-link>
    </div>
  </nav>
</template>

<script>
const OFFSET = 30 //distance to evoke nav bar

export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0
    }
  },

  mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    onScroll() {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    }
  }
}
</script>

<style lang="scss" scoped>
.nav.hidden-navbar {
  transform: translate3d(0, -100%, 0);
}
.nav {
  transform: translate3d(0, 0, 0);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 12px 0;
  color: var(--white);
  position: fixed;
  background-color: Rgb($color-primary);
  font-size: 14px;
  transition: all 0.3s;
  z-index: 11;
  font-weight: 400;
  width: 100vw;

  &__links {
    min-width: 400px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @include breakpoint(sm) {
      min-width: 300px;
    }
  }

  @include breakpoint(sm) {
    margin-bottom: 0;
    padding: 5px 0;
  }

  &__name {
    display: flex;
    flex-direction: column;
    text-align: center;
    order: 2;
    border: 1px solid white;
    padding: 5px 15px;
    transition: all 0.3s;
    font-size: 18px;

    @include breakpoint(sm) {
      padding: 0 15px;
      line-height: 26px;
    }
    &:hover {
      color: var(--black);
      background-color: var(--white);
    }

    .sub-title {
      font-size: 12px;
      margin-top: 5px;

      @include breakpoint(sm) {
        margin-top: 0;
      }
    }
  }

  &__about {
    order: 3;
  }

  &__projects {
    order: 1;
  }
}
</style>
