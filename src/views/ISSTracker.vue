<template>
  <div class="project">
    <!-- HERO -->
    <Hero :hero="hero" />

    <!-- MAIN CONTENT -->
    <main class="main-case">
      <!-- INTRO -->
      <Intro :intro="intro" />

      <!-- SNIPPETS -->
      <Snippets :snippets="snippets" />

      <!-- SITUATION -->
      <Situation :situation="situation" />

      <!-- SOLUTION -->
      <Solution :solution="solution" />

      <!-- THE PROCESS -->
      <TheProcess :process="process" />
    </main>
  </div>
</template>

<script>
import Snippets from '@/components/project/Snippets'
import Hero from '@/components/project/Hero'
import Intro from '@/components/project/Intro'
import Situation from '@/components/project/Situation'
import Solution from '@/components/project/Solution'
import TheProcess from '@/components/project/TheProcess'

export default {
  components: {
    Snippets,
    Hero,
    Intro,
    Situation,
    Solution,
    TheProcess
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
      },
      solution: {
        title:
          'Translating Data Into a Readable, Digestible & Beautiful Application',
        description:
          'The International Space Station (ISS) is a multi-nation construction project that is the largest single structure humans ever put into space. Its main construction was completed between 1998 and 2011, although the station continually evolves to include new missions and experiments. It has been continuously occupied since Nov. 2, 2000.'
      },
      process: {
        description:
          'There is more to design and web development than the mere process of what one sees as the final product. Far before any visual interface is conceived, I meet and collaborate with the client to better understand their goals. Armed with this knowledge, I am able to build smart– incorporating business needs as well as design aesthetics and modern web architecture and technologies to solve the most important needs for the client.'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
