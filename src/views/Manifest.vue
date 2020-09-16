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
      <Results :results="results" :lighthouse="lighthouse" />

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
        description: `To begin, I started finding the current problems facing existing satalite trackers and defining solutions to them. I came up with my solutions through both general research about what the ISS is and existing ISS trackers.`
      },
      objectives: {
        goals: [
          'Too many confusing or irrevelant features/ metrics',
          'Lacking a strong/ modern visual design',
          'Mobile/ tablet views are unexistent'
        ],
        solutions: [
          'Design a clear "control pannel" of useful features/ metrics',
          'Upgrade the design to that of modern space inspired',
          'Create a responsive layout'
        ]
      },
      strategy: {
        description:
          'After general research and objective analysis, I began playing around with how content would fit together and interact. I cemented the metrics I wanted to include and then arranged how they should interact with each other.',
        infoArc: {
          description: `This is where I gathered all of the metrics and data points that I wanted to include. This  included, velocity, latitude and longitude coordinates, wheather or not the ISS was covered by the moon (visibility), what country it was currently over and a description of what the ISS is were all essiental to better understanding the ISS.`,
          image:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.searchenginejournal.com%2Fwp-content%2Fuploads%2F2019%2F08%2Finformation-architecture-graphic.png&f=1&nofb=1'
        },
        interaction: {
          description: `This stage lays out how elements interect with each other and with the user. To execute this, I defined the context of the site: a map. From my research I understood that having a control pannel where users could find the metrics and informaton is usefull. This is the flow. Finally, I was able to get granular and define positioning, layout and overall design. This leads nicely to the next stage of development. `,
          image:
            'https://qubstudio.com/wp-content/uploads/2018/09/%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-1@2x-100-768x574.jpg'
        }
      },
      dev: {
        description:
          'Personally, my favorite stage, I can now begin making the project come to life. I will be using the latest web technologies and practices to insure the longevity of this web app.'
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
          name: 'API Intergration (Fetch API)',
          description: `Without a doubt, the Fetch API made it efficent and easy to grab data from the API and display it in the browser. Error checking and having multiple API's display info was made easy with this feature.`
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
        image: require('../assets/images/iss_tracker/iss_composite.png'),
        lighthouseReport:
          'https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=http%3A%2F%2Ftheisstracker.netlify.app'
      },
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
