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
    <main>
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
        <h3 class="">Snippets</h3>
        <div class="snippet-list">
          <ul class="snippet">
            <li class="snippet-list--title">Technologies</li>
            <li>HTML</li>
            <li>SCSS/CSS</li>
            <li>Vanilla Javascript</li>
            <li>Vue JS</li>
            <li>Hugo</li>
          </ul>
          <ul class="snippet">
            <li class="snippet-list--title">What I learned</li>
            <li>API Intergration</li>
            <li>Async-await Functions</li>
            <li>HTML Data Themes</li>
          </ul>
          <ul class="snippet">
            <li class="snippet-list--title">Date</li>
            <li>June 2020</li>
          </ul>
          <ul class="snippet">
            <li class="snippet-list--title">Codebase</li>
            <li>Github</li>
          </ul>
        </div>
      </section>

      <!-- SITUATION -->
      <section class="situation">
        <h3 class="">The Situation</h3>
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
export default {}
</script>

<style lang="scss" scoped>
main {
  display: grid;
  gap: 200px;
  width: 70vw;
  margin: 0 auto;
  margin-top: 100px;

  @include breakpoint(sm) {
    width: auto;
    padding: 20px;
  }
  @include breakpoint(sm) {
    gap: 50px;
    margin-top: 50px;
  }

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

    p {
      font-weight: 500;
    }
  }

  .snippets {
    h3 {
      background-color: black;
      color: white;
      padding: 10px;
      display: inline-block;
      margin-bottom: 50px;
    }

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

      &--title {
        border-bottom: 1px solid var(--black);
        margin-bottom: 20px;
        padding-bottom: 15px;
        font-weight: 600;
      }

      li:not(:first-child) {
        display: inline;
        margin-right: 15px;
      }

      li:first-child::after {
        content: '';
      }

      li:last-child::after {
        content: '';
      }

      li::after {
        content: '|';
        padding-right: 10px;
        padding-left: 20px;
      }
    }
  }

  .situation {
    h3 {
      background-color: black;
      color: white;
      padding: 10px;
      display: inline-block;
      margin-bottom: 50px;
    }

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
.project {
  padding-top: 79px;
  // max-width: 80vw;
  // margin: 0 auto;

  @include breakpoint(md) {
    // padding: 50px;
    padding-top: 75px;
  }

  @include breakpoint(sm) {
    // padding: 20px;
    padding-top: 68px;
  }

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
}
</style>
