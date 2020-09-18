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
import Design from '@/components/project/process/Design'
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
    Design,
    Dev,
    Results,
    Summary,
    CTA
  },
  data() {
    return {
      hero: {
        title: `Tik'it`,
        subTitle: 'A beautiful way to view a range of countdown timers',
        image: require('../assets/images/tik-it/banner.jpg'),
        webp: require('../assets/images/tik-it/banner.webp')
      },
      intro: {
        title: 'Never Miss Imnportant Events',
        description: `In trying to build my first Vue Web app, I decided to combine a few ideas I had learned– todo lists and countdown timers. While these ideas seem simple, I wanted to create something that had more substance. This web app alows users to create, view and update their custom events, like birthdays, and view national holidays.`
      },
      snippets: [
        {
          name: 'Tech Stack 📚',
          items: ['Vue', 'Firebase', 'SCSS', 'ES6', 'HTML5']
        },
        {
          name: 'What I Learned ✏️',
          items: ['Vue', 'Sorting/ Filtering', 'Handling user input']
        },
        {
          name: 'Project Type ☕️',
          items: ['Personal Project']
        },
        {
          name: 'Codebase 👾',
          link: true,
          items: [
            {
              name: 'Github',
              link: 'https://github.com/tyler-morales/tik-it'
            },
            {
              name: 'Live Site',
              link: 'https://tik-it.netlify.app/'
            }
          ]
        }
      ],
      situation: {
        description:
          'Create a hub to remind and make important events exciting',
        org: '– Tyler Morales'
      },
      solution: {
        title: 'Attention to Interface and Usability',
        description: `The already existing websites that track holidays or allow users to create their own countdown events lack an inviting and modern user interface. While form doesn't keep users around, functionality does, and that is where I believe this web app shines. It allows users to create a hub for life's most important events! `
      },
      process: {
        description:
          'This project required the entire process from design thinking to back end development. I really wanted to push myself in terms of the technologies used. Because of this, took my time to ensure the design, user interactions and development were up to standards. Additonally, because of this being a larger project, the project steps were not 100% linear in nature, but fluid.'
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
          responsibilities: [
            'Frontend Development',
            'Backend Development',
            'SEO'
          ]
        }
      ],
      discovery: {
        description: `To begin, I started to look around what websites already existed. This influenced what I wanted to include and not included. Additionally, I found some design inspiration from dribble that really inspired me to make this web app in the first place.`
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
      competition: [
        {
          name: 'N2YO',
          description:
            'While comprehensive in metrics about the ISS, it lacks a visual pressence that entices and helps the user decipher the numbers.',
          link: 'https://www.n2yo.com/?s=25544',
          keyFeatures: [
            'Outdated UI',
            'Comprehensive metrics',
            'Info overload'
          ],
          image: require('../assets/images/iss_tracker/competition/ny2o.jpg'),
          webp: require('../assets/images/iss_tracker/competition/ny2o.webp')
        },
        {
          name: 'European Space Agency',
          description:
            'More of a widget than web app, this is a slow and unresponsive application that seems to have very little attention for users.',
          link:
            'https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/International_Space_Station/Where_is_the_International_Space_Station',
          keyFeatures: ['Outdated UI', 'Very slow', 'A widget'],
          image: require('../assets/images/iss_tracker/competition/esa.jpg'),
          webp: require('../assets/images/iss_tracker/competition/esa.webp')
        },
        {
          name: 'ISS Tracker',
          description:
            'Placing the metrics around the perimeter of the web app, it is difficult to get a quick glance of the most important information.',
          link: 'http://www.isstracker.com/',
          keyFeatures: ['Outdated UI', 'Good UX', 'Feature rich'],
          image: require('../assets/images/iss_tracker/competition/isstracker.jpg'),
          webp: require('../assets/images/iss_tracker/competition/isstracker.webp')
        }
      ],
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
      design: {
        description: `After finguring strategy and UX, I am finally able to design. This includes lo-fi wireframes, hi-fi mockups and every design element inbetween. `
      },
      ui: [
        {
          image:
            'https://i.pinimg.com/originals/d8/7a/b5/d87ab59823fbc3f3d493c732fa45888f.png',
          description: 'A look at the design system'
        }
      ],
      moodboard: {
        image:
          'https://i.pinimg.com/236x/05/00/1b/05001b1346fea9be6590deb24dc5021e.jpg',
        description: 'Some moodboard ideas'
      },
      dev: {
        description:
          'Personally, my favorite stage, I can now begin making the project come to life. I will be using the latest web technologies and practices to insure the longevity of this web app.'
      },
      technologies: [
        {
          name: 'ES6',
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
        },
        {
          name: 'Netlify',
          logo: 'netlify'
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
        image: require('../assets/images/iss_tracker/composite.png'),
        webp: require('../assets/images/iss_tracker/composite.webp'),
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
