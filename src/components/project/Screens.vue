<template>
  <div>
    <div class="grid">
      <div class="screen" v-for="(screen, index) in screens" :key="index">
        <img @click="showSingle(screen.image)" :src="screen.image" alt="" />
        <span>{{ screen.description }}</span>
      </div>
    </div>

    <!-- all props & events -->
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
  // margin-top: 100px;
  padding: 50px;
  // display: grid;
  // grid-template-columns: repeat(2, 1fr);
  // gap: 50px;
  column-count: 2;
  column-gap: 50px;
  max-height: 1200px;
  background-color: #f2f5ff;
  // background-image: url('https://images.unsplash.com/photo-1550895030-823330fc2551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80');

  @include breakpoint(sm) {
    column-count: 1;
    max-height: 100%;
    column-gap: 20px;
    padding: 20px;
  }

  .screen {
    margin-bottom: 50px;

    @include breakpoint(sm) {
      margin-bottom: 20px;
    }
  }
  span {
    display: inline-block;
    margin-top: 10px;
  }
  img {
    box-shadow: var(--shadow-md);
    cursor: zoom-in;
  }
}
</style>
