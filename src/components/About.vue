<template>
  <div class="grid">
    <div class="grid__img">
      <h2>{{ about.title }}</h2>
      <p class="sub-title">{{ about.subTitle }}</p>
      <picture loading="lazy">
        <source type="image/webp" :srcset="about.webp" />
        <img loading="lazy" :src="about.image" alt="Profile Image" />
      </picture>
    </div>

    <div class="grid__skills">
      <h2>Skills</h2>
      <div>
        <h4>Development</h4>
        <ul class="grid__skills__list">
          <li v-for="(devSkill, index) in about.dev" :key="index">
            {{ devSkill }}
          </li>
        </ul>
      </div>
      <div>
        <h4>Design</h4>
        <ul class="grid__skills__list">
          <li v-for="(designSkill, index) in about.design" :key="index">
            {{ designSkill }}
          </li>
        </ul>
      </div>
    </div>

    <div class="grid__para">
      <p>{{ about.bio[0] }}</p>
      <br />
      <p>{{ about.bio[1] }}</p>
    </div>

    <div class="grid__socials">
      <h2>Connect</h2>
      <div class="grid__socials__icons u-mt">
        <a href="https://github.com/tyler-morales" aria-label="link">
          <github-icon size="3x" class="icon"></github-icon>
        </a>
        <a href="https://www.instagram.com/tmo.codes/" aria-label="link">
          <instagram-icon size="3x" class="icon"></instagram-icon>
        </a>
        <a href="https://medium.com/@tmorales" aria-label="link">
          <codepen-icon size="3x" class="icon"></codepen-icon>
        </a>
        <a href="mailto:moratyle@gmail.com" aria-label="link">
          <mail-icon size="3x" class="icon"></mail-icon>
        </a>
        <a
          href="https://www.linkedin.com/in/tyler-morales-web-dev/"
          aria-label="link"
        >
          <linkedin-icon size="3x" class="icon"></linkedin-icon>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {
  InstagramIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  CodepenIcon
} from 'vue-feather-icons'

export default {
  props: {
    about: {
      type: Object,
      required: true
    }
  },
  components: {
    InstagramIcon,
    GithubIcon,
    LinkedinIcon,
    MailIcon,
    CodepenIcon
  }
}
</script>

<style lang="scss" scoped>
.grid {
  columns: 2 auto;
  column-gap: 60px;
  margin: 40px auto;
  max-width: 1200px;
  padding: 50px;

  @include breakpoint(md) {
    columns: 1 auto;
    padding: 20px;
  }

  @include breakpoint(sm) {
    columns: 1 auto;
    margin: 0;
    padding: 20px;
  }

  & > * {
    background-color: var(--foreground-color);
    padding: 44px;
    display: inline-block;
    margin: 30px auto;
    width: 100%;
    border-radius: 40px;
    box-shadow: var(--shadow-light);

    @include breakpoint(sm) {
      padding: 0;
      margin: 10px 0px;
      background-color: inherit;
      box-shadow: none;
    }

    h4 {
      margin: 20px 0;
      font-weight: 500;
    }

    .sub-title {
      line-height: 24px;
      margin: 20px 0;
    }
  }

  &__img {
    text-align: center;
  }

  &__para {
    margin: 40px 0;
  }

  &__skills {
    text-align: center;

    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      & > *:not(:last-child) {
        margin-right: 20px;
      }
    }
  }

  &__socials {
    text-align: center;

    &__icons {
      margin-top: 40px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 20px 30px;

      :hover > * {
        stroke: Rgb($color-secondary);
        transition: all 0.3s;
      }
    }
  }
}
</style>
