<template>
  <div class="grid">
    <div class="grid__img">
      <h2>{{ about.title }}</h2>
      <h4>{{ about.subTitle }}</h4>
      <img class="u-mt" :src="about.image" alt="" />
    </div>

    <div class="grid__skills">
      <h2>Skills</h2>
      <div class="u-mt">
        <h4>Development</h4>
        <ul class="grid__skills__list">
          <li v-for="(devSkill, index) in about.dev" :key="index">
            {{ devSkill }}
          </li>
        </ul>
      </div>
      <div class="u-mt">
        <h4>Design</h4>
        <ul class="grid__skills__list">
          <li v-for="(designSkill, index) in about.design" :key="index">
            {{ designSkill }}
          </li>
        </ul>
      </div>
    </div>
    <div class="grid__para">
      <p>{{ about.bio }}</p>
    </div>
    <div class="grid__socials">
      <h2>Connect</h2>
      <div class="grid__socials__icons u-mt">
        <a href="https://github.com/tyler-morales">
          <github-icon size="3x" class="icon"></github-icon>
        </a>
        <a href="https://www.instagram.com/tmo.codes/">
          <instagram-icon size="3x" class="icon"></instagram-icon>
        </a>
        <a href="https://medium.com/@tmorales">
          <codepen-icon size="3x" class="icon"></codepen-icon>
        </a>
        <a href="mailto:moratyle@gmail.com">
          <mail-icon size="3x" class="icon"></mail-icon>
        </a>
        <a href="https://www.linkedin.com/in/tyler-morales-web-dev/">
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
  margin: 100px auto;
  max-width: 1200px;
  padding: 20px;

  @include breakpoint(md) {
    columns: 1 auto;
    margin: 50px;
  }

  @include breakpoint(sm) {
    columns: 1 auto;
    margin: 0;
  }

  & > * {
    background-color: #fff;
    padding: 44px;
    display: inline-block;
    margin: 30px auto;
    width: 100%;
    border-radius: 40px;
    box-shadow: 4px 12px 40px 6px rgba(0, 0, 0, 0.04);

    @include breakpoint(sm) {
      padding: 22px;
      margin: 10px 0px;
    }
  }

  &__img {
    text-align: center;
  }

  &__para {
  }

  &__skills {
    text-align: center;

    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 25px;

      & > *:not(:last-child) {
        margin-right: 20px;
      }
    }
  }

  &__socials {
    width: 100%;
    text-align: center;

    &__icons {
      display: flex;
      justify-content: space-around;

      :hover > * {
        stroke: Rgb($color-secondary);
        transition: all 0.3s;
      }
    }
  }
}
</style>
