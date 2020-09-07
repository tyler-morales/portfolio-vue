<template>
  <div class="project">
    <!-- HERO -->
    <div class="hero">
      <div class="container">
        <div class="text">
          <h1 class="multiline-strikethrough">
            International Space Station Tracker
          </h1>
          <h4>A real time satellite tracker</h4>
        </div>
      </div>
    </div>

    <!-- MAIN CONTENT -->
    <main class="main-case">
      <section class="intro">
        <h2 class="intro--title">An Industry leader and innovator</h2>
        <p>
          The International Space Station (ISS) is a multi-nation construction
          project that is the largest single structure humans ever put into
          space. Its main construction was completed between 1998 and 2011,
          although the station continually evolves to include new missions and
          experiments. It has been continuously occupied since Nov. 2, 2000.
        </p>
      </section>

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
      <section class="situation">
        <h3 class="section-header">The Situation</h3>
        <p>
          We need an interactive and real-time view of the ISS with a modern
          design
        </p>
        <h5>–ISS Comission</h5>
      </section>
    </main>
  </div>
</template>

<script>
import Snippets from '@/components/project/Snippets'

export default {
  components: {
    Snippets
  },
  data() {
    return {
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.main-case {
  .intro {
    max-width: 800px;
    text-align: center;
    margin: 0 auto;

    @include breakpoint(md) {
      text-align: left;
      width: auto;
    }

    &--title {
      font-size: 80px;
      line-height: 1.0625;
      margin-bottom: 30px;

      @include breakpoint(md) {
        font-size: 60px;
        font-weight: 500;
      }

      @include breakpoint(sm) {
        font-size: 25px;
      }
    }
  }

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

  .situation {
    p {
      font-size: 80px;
      line-height: 97px;
      margin-bottom: 40px;

      @include breakpoint(md) {
        font-size: 50px;
        line-height: 60px;
      }

      @include breakpoint(sm) {
        font-size: 22px;
        line-height: 30px;
      }
    }
  }
}

// .multiline-strikethrough {
//   display: inline;
//   // font-size: 4rem;
//   // line-height 1em;
//   background-image: linear-gradient(
//     transparent 0.8ex,
//     Rgb($color-secondary) 0.8ex,
//     Rgb($color-secondary) 1.5ex,
//     transparent 1.5ex
//   );
// }

.hero {
  height: 720px;
  background-image: url('../assets/images/iss_tracker/banner.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  @include breakpoint(md) {
    height: 360px;
  }

  .container {
    height: 100%;
    max-width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 240px;
    align-items: center;

    @include breakpoint(sm) {
      grid-template-columns: 1fr;
      gap: 0;
      text-align: center;
    }

    .text {
      max-width: 600px;
      grid-column: 2;
      color: var(--white);
      line-height: 75px;

      h4 {
        margin-top: 30px;
      }
    }
  }
}
</style>
