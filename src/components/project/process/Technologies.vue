<template>
  <div>
    <h3>Technologies</h3>
    <div class="grid">
      <ul
        class="technology"
        v-for="(technology, index) in technologies"
        :key="index"
      >
        <img
          :src="`https://cdn.svgporn.com/logos/${technology.logo}.svg`"
          :alt="technology.name"
        />
        <span class="name">{{ technology.name }}</span>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    technologies: {
      type: Array,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 100px;
  justify-items: center;
  width: 100%;
  margin-top: 80px;

  @include breakpoint(sm) {
    grid-template-columns: 2fr;
    gap: 50px;
  }

  .technology {
    text-align: center;
    display: flex;
    flex-direction: column;

    img {
      width: 128px;
      height: 128px;
    }

    span {
      margin-top: 40px;
      display: inline-block;
      font-size: 22px;

      @include breakpoint(sm) {
        margin-top: 20px;
      }
    }
  }
}
</style>
