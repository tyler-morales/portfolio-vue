<template>
  <div class="project">
    <!-- PROGRESS BAR -->
    <CompletionBar />
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

      <!-- DESIGN -->
      <Design :design="design" :ui="ui" :moodboard="moodboard" />

      <!-- DEV -->
      <Dev :dev="dev" :technologies="technologies" :features="features" />

      <!-- RESULTS -->
      <Results :results="results" :lighthouse="lighthouse" />
    </main>
  </div>
</template>

<script>
import CompletionBar from '@/components/CompletionBar'
import Snippets from '@/components/project/Snippets'
import Hero from '@/components/project/Hero'
import Intro from '@/components/project/Intro'
import Situation from '@/components/project/Situation'
import Solution from '@/components/project/Solution'
import TheProcess from '@/components/project/process/TheProcess'
import Discovery from '@/components/project/process/Discovery'
import Strategy from '@/components/project/process/Strategy'
import Design from '@/components/project/process/Design'
import Dev from '@/components/project/process/Dev'
import Results from '@/components/project/Results'

export default {
  components: {
    CompletionBar,
    Snippets,
    Hero,
    Intro,
    Situation,
    Solution,
    TheProcess,
    Discovery,
    Strategy,
    Design,
    Dev,
    Results
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
        image: 'https://picsum.photos/id/529/500',
        description: 'a description of a picture'
      },
      moodboard: {
        image: 'https://picsum.photos/id/526/500',
        description: 'a description of the moodboard'
      },
      dev: {
        description:
          'A description of something deve related hopefully long enough to make a thorough descripiotn of what I am trying to convey'
      },
      technologies: [
        {
          name: 'HTML',
          image: 'https://cdn.svgporn.com/logos/html-5.svg'
        },
        {
          name: 'GitHub',
          image: 'https://cdn.svgporn.com/logos/github-icon.svg'
        },
        {
          name: 'SCSS',
          image: 'https://cdn.svgporn.com/logos/sass.svg'
        },
        {
          name: 'Netlify',
          image: 'https://cdn.svgporn.com/logos/netlify.svg'
        },
        {
          name: 'ES6',
          image: 'https://cdn.svgporn.com/logos/javascript.svg'
        },
        {
          name: 'Vue',
          image: 'https://cdn.svgporn.com/logos/vue.svg'
        }
      ],
      features: [
        {
          name: 'Flexbox CSS Grid',
          description:
            'Flexbox & CSS grid made ispossible and simple to make aresponsive web app, adjusting font,size and elements accordingly'
        },
        {
          name: 'Flexbox CSS Grid',
          description:
            'Flexbox & CSS grid made ispossible and simple to make aresponsive web app, adjusting font,size and elements accordingly'
        },
        {
          name: 'Flexbox CSS Grid',
          description:
            'Flexbox & CSS grid made ispossible and simple to make aresponsive web app, adjusting font,size and elements accordingly'
        },
        {
          name: 'Flexbox CSS Grid',
          description:
            'Flexbox & CSS grid made ispossible and simple to make aresponsive web app, adjusting font,size and elements accordingly'
        },
        {
          name: 'Flexbox CSS Grid',
          description:
            'Flexbox & CSS grid made ispossible and simple to make aresponsive web app, adjusting font,size and elements accordingly'
        },
        {
          name: 'Flexbox CSS Grid',
          description:
            'Flexbox & CSS grid made ispossible and simple to make aresponsive web app, adjusting font,size and elements accordingly'
        }
      ],
      results: {
        image: 'https://tmo.codes/images/iss_composite.png',
        lighthouseReport: 'tmo.codes'
      },
      lighthouse: [
        {
          name: 'Speed',
          icon: '⚡️',
          score: 90
        },
        {
          name: 'Performance',
          icon: '💪🏽',
          score: 95
        },
        {
          name: 'Accesibility',
          icon: '👁',
          score: 92
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
