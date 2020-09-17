<template>
  <div v-if="screens">
    <div class="grid">
      <div class="screen" v-for="(screen, index) in screens" :key="index">
        <span>{{ screen.description }}</span>
        <picture @click="showSingle(screen.webp)">
          <source type="image/webp" :srcset="screen.webp" />
          <img :src="screen.image" />
        </picture>
      </div>
    </div>

    <!-- LIGHTBOX -->
    <vue-easy-lightbox
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'
export default {
  props: {
    screens: { type: Array, required: false }
  },
  components: {
    VueEasyLightbox
  },
  data() {
    return {
      imgs: '', // Img Url , string or Array of string
      visible: false,
      index: 0 // default: 0
    }
  },
  methods: {
    showSingle(img) {
      this.imgs = img
      this.show()
    },
    show() {
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  padding: 50px;
  column-count: 2;
  column-gap: 50px;
  min-height: min-content;
  background-color: Rgba($color-secondary / $lighten);

  @include breakpoint(sm) {
    column-count: 1;
    max-height: 100%;
    column-gap: 20px;
    padding: 20px;
    background-color: inherit;
  }

  .screen:not(last-child) {
    margin-bottom: 50px;

    &:last-child {
      margin-bottom: 0;
    }

    @include breakpoint(sm) {
      margin-bottom: 20px;
    }
  }
  span {
    display: inline-block;
    margin-bottom: 10px;
  }
  img {
    box-shadow: var(--shadow-md);
    cursor: zoom-in;
  }
}
</style>
