<template>
  <div class="project">
    <!-- HERO -->
    <Hero :hero="hero" />

    <!-- MAIN CONTENT -->
    <main class="main-case">
      <Intro :intro="intro" />

      <!-- SNIPPETS -->
      <section id="quickfacts" class="snippets">
        <h3 class="section-header">Snippets</h3>
        <div class="snippet-list">
          <Snippets
            class="snippet"
            v-for="(snippet, index) in snippets"
            :key="index"
            :snippet="snippet"
          />
        </div>
      </section>

      <!-- SITUATION -->
      <Situation :situation="situation" />
    </main>
  </div>
</template>

<script>
import Snippets from '@/components/project/Snippets'
import Hero from '@/components/project/Hero'
import Intro from '@/components/project/Intro'
import Situation from '@/components/project/Situation'

export default {
  components: {
    Snippets,
    Hero,
    Intro,
    Situation
  },
  data() {
    return {
      hero: {
        title: 'International Space Station Tracker',
        subTitle: 'A real time satellite tracker',
        image: require('../assets/images/iss_tracker/banner.jpg')
      },
      intro: {
        title: 'An Industry leader and innovator',
        description: `The International Space Station (ISS) is a multi-nation constructionproject that is the largest single structure humans ever put into space.Its main construction was completed between 1998 and 2011, although thestation continually evolves to include new missions and experiments. Ithas been continuously occupied since Nov. 2, 2000.`
      },
      snippets: [
        {
          name: 'Tech Stack 📚',
          items: ['HTML', 'SCSS', 'ES6', 'Vue']
        },
        {
          name: 'What I Learned ✏️',
          items: [
            'API Intergration',
            'Async-await Functions',
            'HTML Data Themes'
          ]
        },
        {
          name: 'Timeline ⏱',
          items: ['September-October 2020']
        },
        {
          name: 'Codebase 👾',
          link: true,
          items: [
            {
              name: 'Github',
              link: 'https://github.com/'
            },
            {
              name: 'Live Site',
              link: 'https://tmo.codes/'
            }
          ]
        }
      ],
      situation: {
        description:
          'We need an interactive and real-time view of the ISS with a modern design',
        org: '–ISS Comission'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main-case {
  .snippets {
    .snippet-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 50px 80px;

      @include breakpoint(md) {
        grid-template-columns: 1fr;
      }

      @include breakpoint(sm) {
        gap: 30px 80px;
      }
    }
  }
}
</style>
