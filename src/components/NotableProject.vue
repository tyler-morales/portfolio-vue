<template>
  <div class="notable-project">
    <div class="notable-project__image">
      <a
        :href="notableProject.link"
        class="img-hover-zoom img-hover-zoom--colorize"
        target="_blank"
      >
        <picture loading="lazy">
          <source type="image/webp" :srcset="notableProject.webp" />
          <img :src="notableProject.image" />
        </picture>
      </a>
      <external-link-icon
        size="1.25x"
        class="icon--external-link"
      ></external-link-icon>
    </div>
    <h5 class="notable-project--title">
      {{ notableProject.title }}
    </h5>
  </div>
</template>

<script>
import { ExternalLinkIcon } from 'vue-feather-icons'

export default {
  props: {
    notableProject: {
      type: Object,
      required: true
    }
  },
  components: {
    ExternalLinkIcon
  }
}
</script>

<style lang="scss" scoped>
.notable-project {
  &__image {
    position: relative;
  }

  &--title {
    margin-top: 10px;
  }
}

/* The Image container */
.img-hover-zoom {
  width: 100%;
  // height: 306px;
  display: inline-block;
  overflow: hidden;
  cursor: pointer;
  // border: 2px solid white;
}

/* Colorize-zoom Container */
.img-hover-zoom--colorize img {
  transition: all 0.5s ease-in-out;
  filter: grayscale(50%);
  transform: scale(1.3);

  @include breakpoint(md) {
    filter: none;
    transform: scale(1);
  }
}

/* The Transformation */
.img-hover-zoom--colorize:hover img {
  transition: all 0.5s ease-in-out;
  filter: grayscale(0);
  transform: scale(1);
}
</style>
