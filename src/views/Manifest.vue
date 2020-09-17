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

      <!-- STRATEGY -->
      <Strategy :strategy="strategy" />

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
import Strategy from '@/components/project/process/Strategy'
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
    Strategy,
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
        image: require('../assets/images/manifest/banner-lg.jpg')
      },
      intro: {
        title: 'Maximizing Retirement Outcomes.',
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
          'This project required the help of designer (Sanjana _____) and CEO (Anurrag Tripath). I began this project through talking with both Sanjana and Anurrag about the current state of the website. From there, Sanjana and I would go back and fourth between her design mockups in Figma and the result I created. Once the site matched her designs and worked functionally both in terms of responsiveness and form submission, I then worked with Anurrag in migrating the current repo to a Manifest specfic repo on Github.'
      },
      scope: [
        {
          phaseName: 'Development',
          code: true,
          responsibilities: ['Frontend Development', 'Repository Migration']
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
      strategy: {
        description:
          'After general research and objective analysis, I began playing around with how content would fit together and interact. I cemented the metrics I wanted to include and then arranged how they should interact with each other.'
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
          description: `I linked up `
        },
        {
          name: 'Leaflet (JS map library)',
          description:
            'I used Leaflet to take care of rendering a responsive map. With just a few lines of code I was able to insert an ISS icon and have it move continously (10sec intervals).'
        },
        {
          name: 'Where The ISS & Rest Countries API',
          description: `The engine of this web app came from Where the ISS's API. This included all of the metrics that are displayed on the control pannel. To get the country flag icons, I used the popular REST Countries API`
        },
        {
          name: 'Flexbox CSS Grid',
          description:
            'Using the latest css features, I was able to build a fully responsive layout, while maintaining a clean codebase.'
        },
        {
          name: 'CSS Transitions',
          description:
            'In order to make the interface more friendly, I added a couple transitions to the cotrol pannel when it is minified and shows/ hides the more info tab.'
        },
        {
          name: 'CSS Custom Properities',
          description:
            'Creating a dark theme when the moon covers the ISS was easily implemented by using CSS Custom Properties (variables) and HTML Data-themes. This allowed for easy color pallete switching on all of the components.'
        }
      ],
      results: {
        lighthouseReport:
          'https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=http%3A%2F%2Ftheisstracker.netlify.app'
      },
      screens: [
        {
          image: require('../assets/images/manifest/home.png'),
          description: 'Home'
        },
        {
          image: require('../assets/images/manifest/about.png'),
          description: 'About'
        },
        {
          image: require('../assets/images/manifest/contact.png'),
          description: 'Contact Form'
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
          score: 88
        },
        {
          name: 'Best Practices',
          icon: '⚡️',
          score: 98
        },
        {
          name: 'SEO',
          icon: '🖥',
          score: 100
        }
      ],
      summary: {
        description: `Overall, I really enjoyed building this project. I immersed myself in new techbologies to create one cohesive tool for viewing an otherwise boring tracker. I am continually updating this project and making sure it can continue being a usefull tool.`
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
