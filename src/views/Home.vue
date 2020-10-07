<template>
  <div id="home" class="home">
    <!-- HERO -->
    <Hero :hero="hero" />

    <!-- CASE STUDIES -->
    <section id="projects" class="case-studies">
      <h2 class="case-studies--title">Case Studies</h2>
      <CaseStudy
        :caseStudy="caseStudy"
        v-for="(caseStudy, index) in caseStudies"
        :key="index"
      />
    </section>

    <!-- NOTABLE PROJECTS -->
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

    <!-- FACTS -->
    <section class="facts">
      <Facts :fact="fact" v-for="(fact, index) in facts" :key="index" />
    </section>

    <!-- ABOUT -->
    <section id="about" class="about">
      <h2 class="about--title">About Me</h2>
      <About :about="about" />
    </section>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import CaseStudy from '@/components/CaseStudy'
import NotableProject from '@/components/NotableProject'
import Facts from '@/components/Facts'
import About from '@/components/About'

export default {
  name: 'Home',
  components: {
    Hero,
    CaseStudy,
    NotableProject,
    Facts,
    About
  },
  mounted() {
    var section = this.$router.currentRoute.hash.replace('#', '')
    if (section)
      this.$nextTick(() =>
        window.document.getElementById(section).scrollIntoView()
      )
  },
  data() {
    return {
      hero: {
        type: 'Web App',
        name: 'ISS Tracker',
        description: 'A real time satellite tracker',
        link: '/isstracker',
        image: require('../assets/images/iss_tracker/thumbnail.jpg'),
        webp: require('../assets/images/iss_tracker/thumbnail.webp')
      },
      caseStudies: [
        {
          type: 'Marketing Website',
          title: 'Manifest',
          description: 'A frictionless way to transfer retirement accounts',
          image: require('../assets/images/manifest/thumbnail.png'),
          webp: require('../assets/images/manifest/thumbnail.webp'),
          tags: ['Jekyll', 'SCSS', 'Team Project'],
          path: '/manifest',
          reverse: true
        },
        {
          type: 'Web App',
          title: 'Countdown Timer',
          description: 'A beautiful way to view a range of countdown timers',
          image: require('../assets/images/tik-it/thumbnail.jpg'),
          webp: require('../assets/images/tik-it/thumbnail.webp'),
          tags: ['Vue', 'SCSS', 'ES6'],
          path: '/tikit'
        }
      ],
      notableProjects: [
        {
          title: 'Text Adventure Game',
          image: require('../assets/images/textAdventure__thumb.jpg'),
          webp: require('../assets/images/textAdventure__thumb.webp'),
          link: 'https://textadventure.netlify.app/'
        },
        {
          title: 'New Tab Extension',
          image: require('../assets/images/newtab-thumb.jpg'),
          webp: require('../assets/images/newtab-thumb.webp'),
          link: 'https://beautiful-tab.netlify.app/'
        },
        {
          title: 'Travel Journal',
          image: require('../assets/images/ecuador.jpg'),
          webp: require('../assets/images/ecuador.webp'),
          link: 'https://happy-mclean-3b49d7.netlify.app/'
        }
      ],
      facts: [
        {
          title: 'Designer & Developer',
          description:
            'Look no further for someone to design and build your ideas',
          tags: ['Adobe CC', 'Figma', 'Graphic Design'],
          image: require('../assets/icons/unicorn.png')
        },
        {
          title: 'Cutting Edge Tech',
          description: 'Always learning the latest updates & technologies',
          tags: ['HTML', 'CSS/SCSS', 'HUGO', 'ES6'],
          image: require('../assets/icons/computer.png')
        },
        {
          title: 'Strategic Thinker',
          description: 'Each stage is meticulously planned and deliberate',
          tags: ['Research', 'Design', 'Development'],
          image: require('../assets/icons/atom.png')
        }
      ],
      about: {
        title: 'Hello, World 🌎!',
        subTitle: 'I’m a front end developer from Chicago',
        image: require('../assets/images/profile.png'),
        webp: require('../assets/images/profile.webp'),
        bio: [
          `Ever since a young age, I’ve been interested intechnology and design. From growing up with the internet, building countless projects and constantly having an urge to create anything, purposeful design has been important to me. Ultimately, this fascination with creativity and design has led me to find web development the perfect landscape to extend mypassion towards building interactive and intuitive web experiences.`,
          `Along with development, I am very active in the developer community online and in local Chicago Meetups. IN, amongst others, build up and motivate other like minded individuals, document our progress and learn the latest technologies with developers globally! Currently, I am studying Web Development and Design at Columbia College Chicago.`
        ],
        dev: [
          'HTML',
          'CSS/SCSS',
          'JS (ES6)',
          'HUGO',
          'Git/ Github',
          'CLI',
          "API's"
        ],
        design: [
          'Adobe CC Suite',
          'Prototyping',
          'Mockups',
          'Art Direction',
          'Photography'
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding-top: 150px;

  @include breakpoint(md) {
    padding: 50px;
    padding-top: 75px;
  }

  @include breakpoint(sm) {
    padding: 20px;
    padding-top: 75px;
  }

  .case-studies {
    margin-top: 200px;
    display: grid;
    gap: 150px;
    padding: 100px 0;
    background-color: var(--foreground-color);

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
    background-color: var(--foreground-color);
    margin: 100px;
    padding: 100px;
    text-align: center;

    h4 {
      font-weight: 400;
    }

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

  .facts {
    display: grid;
    gap: 100px;
    grid-template-columns: repeat(3, 1fr);
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;

    @include breakpoint(md) {
      grid-template-columns: 1fr;
      gap: 50px;
    }

    @include breakpoint(sm) {
      background-color: var(--foreground-color);
    }
  }

  .about {
    padding-top: 100px;

    &--title {
      text-align: center;
    }
  }
}
</style>
