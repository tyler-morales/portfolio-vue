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
    <section class="notable-projects">
      <h2>Notable Projects</h2>
      <h4>Smaller Projects & Experiments</h4>
      <div class="grid">
        <NotableProject
          :notableProject="project"
          v-for="(project, index) in notableProjects"
          :key="index"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import CaseStudy from '@/components/CaseStudy'
import NotableProject from '@/components/NotableProject'

export default {
  name: 'Home',
  components: {
    Hero,
    CaseStudy,
    NotableProject
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
          type: 'Productivity Tool',
          title: 'Random New Tab',
          description: 'A beautiful New Tab Dashboard',
          image: 'https://tmo.codes/images/iss_mockup-tab.png',
          tags: ['Unsplash API', 'SCSS', 'ES6', 'Vue'],
          reverse: true
        }
      ],
      notableProjects: [
        {
          title: 'Manifest Website',
          image: 'https://tmo.codes/images/ecuador.jpg',
          link: 'https://www.manifestledger.com/'
        },
        {
          title: 'Manifest Website',
          image: 'https://tmo.codes/images/tik-it.jpg',
          link: 'https://www.manifestledger.com/'
        },
        {
          title: 'Manifest Website',
          image: 'https://tmo.codes/images/manifest_website.jpg',
          link: 'https://www.manifestledger.com/'
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
    padding: 100px 0;
    background-color: var(--white);

    @include breakpoint(sm) {
      margin-top: 80px;
      gap: 100px;
    }

    &--title {
      text-align: center;
    }
  }

  .notable-projects {
    justify-content: center;
    background-color: var(--white);
    margin: 100px;
    padding: 100px;
    text-align: center;

    @include breakpoint(lg) {
      margin: 50px;
      padding: 50px;
    }
    @include breakpoint(md) {
      margin: 50px;
      padding: 50px;
    }

    @include breakpoint(sm) {
      padding: 20px;
      margin: 0;
    }

    .grid {
      display: grid;
      gap: 60px;
      grid-template-columns: repeat(3, 1fr);
      margin-top: 100px;

      @include breakpoint(sm) {
        margin-top: 30px;
      }

      @include breakpoint(md) {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
