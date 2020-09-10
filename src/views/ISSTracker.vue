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
      <TheProcess :process="process" :scope="scope" />

      <!-- DISCOVERY -->
      <Discovery
        :discovery="discovery"
        :competition="competition"
        :objectives="objectives"
      />

      <!-- STRATEGY -->
      <Strategy :strategy="strategy" />

      <!-- Design -->
      <Design :design="design" :ui="ui" :moodboard="moodboard" />
    </main>
  </div>
</template>

<script>
import Snippets from '@/components/project/Snippets'
import Hero from '@/components/project/Hero'
import Intro from '@/components/project/Intro'
import Situation from '@/components/project/Situation'
import Solution from '@/components/project/Solution'
import TheProcess from '@/components/project/process/TheProcess'
import Discovery from '@/components/project/process/Discovery'
import Strategy from '@/components/project/process/Strategy'
import Design from '@/components/project/process/Design'

export default {
  components: {
    Snippets,
    Hero,
    Intro,
    Situation,
    Solution,
    TheProcess,
    Discovery,
    Strategy,
    Design
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
      },
      scope: [
        {
          phaseName: 'Discovery',
          globe: true,
          responsibilities: [
            'General Research & Objectives',
            'Competitive Analysis'
          ]
        },
        {
          phaseName: 'Strategy',
          strategy: true,
          responsibilities: ['Information Architecture', 'Interaction Design']
        },
        {
          phaseName: 'Design',
          design: true,
          responsibilities: ['UI Design', 'Moodboard', 'Wireframes/ Mockup']
        },
        {
          phaseName: 'Development',
          code: true,
          responsibilities: ['Frontend Development', 'Accessibility Standards']
        }
      ],
      discovery: {
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis cum provident velit eaque, pariatur perferendis!`
      },
      objectives: {
        goals: [
          'Too much complexity',
          'Increase number of users',
          'Match design aesthetic of similar leading companies'
        ],
        solutions: [
          'Too much complexity',
          'Increase number of users',
          'Match design aesthetic of similar leading companies'
        ]
      },
      competition: [
        {
          name: 'abc Company',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dicta libero minus non eum accusantium.',
          keyFeatures: ['Clean UI', 'Good UX', 'Unresponsive'],
          image: 'https://picsum.photos/id/737/300/200'
        },
        {
          name: 'abc Company',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dicta libero minus non eum accusantium.',
          keyFeatures: ['Clean UI', 'Good UX', 'Unresponsive'],
          image: 'https://picsum.photos/id/927/300/200'
        },
        {
          name: 'abc Company',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dicta libero minus non eum accusantium.',
          keyFeatures: ['Clean UI', 'Good UX', 'Unresponsive'],
          image: 'https://picsum.photos/id/893/300/200'
        }
      ],
      strategy: {
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis cum provident velit eaque, pariatur perferendis!',
        infoArc: {
          description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis cum provident velit eaque, pariatur perferendis!`,
          image: 'https://picsum.photos/id/556/300'
        },
        interaction: {
          description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis cum provident velit eaque, pariatur perferendis!`,
          image: 'https://picsum.photos/id/292/300'
        }
      },
      design: {
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui porro deleniti mollitia facilis nobis esse autem, nesciunt cupiditate molestiae tempore?`
      },
      ui: {
        image: 'https://picsum.photos/id/529/300',
        description: 'a description of a picture'
      },
      moodboard: {
        image: 'https://picsum.photos/id/526/300',
        description: 'a description of the moodboard'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
