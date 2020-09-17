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
      <Discovery :discovery="discovery" :objectives="objectives" />

      <!-- DEV -->
      <Dev :dev="dev" :technologies="technologies" :features="features" />

      <!-- RESULTS -->
      <Results :results="results" :lighthouse="lighthouse" :screens="screens" />

      <!-- SUMMARY -->
      <Summary :summary="summary" />

      <!-- CTA -->
      <CTA />
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
import Dev from '@/components/project/process/Dev'
import Results from '@/components/project/Results'
import Summary from '@/components/project/Summary'
import CTA from '@/components/project/CTA'

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
    Dev,
    Results,
    Summary,
    CTA
  },
  data() {
    return {
      hero: {
        title: 'Manifest',
        subTitle: 'Making 401(k) Transfers Seamless',
        image: require('../assets/images/manifest/banner-lg.jpg'),
        webp: require('../assets/images/manifest/banner-lg.webp')
      },
      intro: {
        title: 'Maximizing Retirement Outcomes',
        description: `Manifest is a small FinTech company based in Hyde Park, IL. It helps manage retirement accounts as people switch between jobs and makes that process streamline and easy. I was tasked with updating their current website to promote it's features, tell the company's story and implement a contact form.`
      },
      snippets: [
        {
          name: 'Tech Stack 📚',
          items: ['Jekyll', 'SCSS', 'HTML5']
        },
        {
          name: 'What I Learned ✏️',
          items: [
            'Jekyll',
            'Designer to Developer Hand-off',
            'Google Forms Inergration'
          ]
        },
        {
          name: 'Project Type ☕️',
          items: ['Contractor']
        },
        {
          name: 'Codebase 👾',
          link: true,
          items: [
            {
              name: 'Github',
              link: 'https://github.com/tyler-morales/manifest_ledger'
            },
            {
              name: 'Live Site',
              link: 'https://www.manifestledger.com/'
            }
          ]
        }
      ],
      situation: {
        description:
          'Update a MVP marketing website to a richer web experience',
        org: '– Manifest'
      },
      solution: {
        title: 'Refactor & Clean Web Architecture',
        description:
          'The code repository that I took over worked, but it could definelty benefit from refactoring and more advanced styling techniques. These features that I built helped make the codebase "DRY" and easy to work with. Through using SCSS mixins, includes and the BEM methodology, I was able to improve the readability and longevity of the codebase.'
      },
      process: {
        description:
          'This project required the help of designer (Sanjana Mehra) and CEO (Anuraag Tripathi). I began this project through talking with both Sanjana and Anuraag about the current state of the website. From there, Sanjana and I would go back and fourth between her design mockups in Figma and the result I created. Once the site matched her designs and worked functionally both in terms of responsiveness and form submission, I then worked with Anuraag in migrating the current repo to a Manifest specfic repo on Github.'
      },
      scope: [
        {
          phaseName: 'Development',
          code: true,
          responsibilities: [
            'Frontend Development',
            'Repository Migration',
            'SEO'
          ]
        }
      ],
      discovery: {
        description: `To begin, I started to look over the original codebase and try to understand what had already been built and what needed to be updated. From there, I took Sanjana's desgins and implemented them into to codebase`
      },
      objectives: {
        goals: [
          'Outdated layouts (CSS)',
          'Lacking a strong cohesive architecture',
          'Needs additional content'
        ],
        solutions: [
          'Implement Flexbox & CSS Grid',
          'Use common classes to refactor code',
          'Build new elements from scratch'
        ]
      },
      dev: {
        description:
          'After discussing goals, designs, and going through the codebase, I quickly moved on to development. The most difficult add the additonal designs without breaking the site. I decided I needed to implement a few archicture standards such as BEM and css variables to make the process streamlined.'
      },
      technologies: [
        {
          name: 'Jekyll',
          logo: 'jekyll'
        },
        {
          name: 'Javascript',
          logo: 'javascript'
        },
        {
          name: 'SCSS',
          logo: 'sass'
        },
        {
          name: 'HTML',
          logo: 'html-5'
        },
        {
          name: 'GitHub',
          logo: 'github-icon'
        }
      ],
      features: [
        {
          name: 'Google Form Intergration',
          description: `I linked up the contact form to a google form API that stored the results in a Google Drive Spreedsheet. `
        },
        {
          name: 'Impact Calculator',
          description: `My favorite feature on this project was building the Impacat Calculator. With plain JS, I implemented a simple calculator that allows users to visually see how much money they can save.`
        },
        {
          name: 'Jekyll',
          description:
            'The existing codebase used Jekyll, a static site generator to create the site. I adopted this and further refactored and updated content. '
        },
        {
          name: 'BEM (Block Element Modifier)',
          description: `Although not a huge site, many styling issues could be solve with the BEM Methodology which made it simple to define common styles that would reach the entire site. `
        },
        {
          name: 'Flexbox CSS Grid',
          description:
            'Using the latest css features, I was able to build a fully responsive layout, while maintaining a clean codebase.'
        },
        {
          name: 'AOS (Animate on Scroll)',
          description:
            'To add just a sprinkle of motion, I used the AOS library to animate text and images when the user scrolls down the page.'
        }
      ],
      results: {
        lighthouseReport:
          'https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fwww.manifestledger.com%2F'
      },
      screens: [
        {
          image: require('../assets/images/manifest/home.png'),
          webp: require('../assets/images/manifest/home.webp'),
          description: 'Home'
        },
        {
          image: require('../assets/images/manifest/about.png'),
          webp: require('../assets/images/manifest/about.webp'),
          description: 'About'
        },
        {
          image: require('../assets/images/manifest/contact.png'),
          webp: require('../assets/images/manifest/contact.webp'),
          description: 'Contact Form'
        },
        {
          image: require('../assets/images/manifest/impact.png'),
          webp: require('../assets/images/manifest/impact.webp'),
          description: 'Impact Calculator'
        }
      ],
      lighthouse: [
        {
          name: 'Performance',
          icon: '💪🏽',
          score: 95
        },
        {
          name: 'Accesibility',
          icon: '👁',
          score: 98
        },
        {
          name: 'Best Practices',
          icon: '⚡️',
          score: 100
        },
        {
          name: 'SEO',
          icon: '🖥',
          score: 100
        }
      ],
      summary: {
        description: `Overall, I enjoyed working on a real project. This was a great opportunity to get a taste of Front End Development in the real world. I greatly upgraded my skills in Git/ Github, communication and development.`
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
