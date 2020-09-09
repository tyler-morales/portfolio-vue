<template>
  <section class="scope">
    <h3>Scope</h3>
    <div class="scope-list">
      <ul class="scope__item" v-for="(item, index) in scope" :key="index">
        <li class="title">
          <globe-icon v-if="item.globe"></globe-icon>
          <code-icon v-if="item.code"></code-icon>
          <eye-icon v-if="item.strategy"></eye-icon>
          <pen-tool-icon v-if="item.design"></pen-tool-icon>
          {{ item.phaseName }}
        </li>
        <li
          class="item"
          v-for="(item, index) in item.responsibilities"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { GlobeIcon, PenToolIcon, CodeIcon, EyeIcon } from 'vue-feather-icons'

export default {
  props: {
    scope: {
      type: Array,
      required: true
    }
  },
  components: {
    GlobeIcon,
    PenToolIcon,
    CodeIcon,
    EyeIcon
  }
}
</script>

<style lang="scss" scoped>
.scope {
  margin-top: 100px;

  @include breakpoint(sm) {
    margin-top: 50px;
  }
  .scope-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 40px;
  }

  .scope__item {
    .title {
      font-weight: 500;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .item {
      color: Rgba($color-primary / $semi-light);
    }
  }
}
</style>
