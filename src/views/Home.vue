<template>
  <div class="home">
    <Hero />
    <section id="projects" class="case-studies">
      <h2 class="case-studies--title">Case Studies</h2>
      <CaseStudy
        :caseStudy="caseStudy"
        v-for="(caseStudy, index) in caseStudies"
        :key="index"
      />
    </section>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import CaseStudy from '@/components/CaseStudy'
export default {
  name: 'Home',
  components: {
    Hero,
    CaseStudy
  },
  data() {
    return {
      caseStudies: [
        {
          type: 'Web App',
          title: 'Countdown Timer',
          description: 'A beautiful way to view a range of countdown timers',
          image: 'https://tmo.codes/images/game-laptop-l.png',
          tags: ['HTML 5', 'SCSS', 'ES6']
        },
        {
          type: 'Game',
          title: 'Text Adventure Game',
          description: 'A beautiful way to view a range of countdown timers',
          image: 'https://tmo.codes/images/iss_mockup-tab.png',
          tags: ['Leaflet.js', 'SCSS', 'ES6', 'Vue'],
          reverse: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding-top: 150px;

  @include breakpoint(sm) {
    padding: 20px;
    padding-top: 75px;
  }

  .case-studies {
    margin-top: 200px;
    display: grid;
    gap: 150px;

    @include breakpoint(sm) {
      margin-top: 80px;
      gap: 100px;
    }

    &--title {
      text-align: center;
    }
  }
}
</style>
