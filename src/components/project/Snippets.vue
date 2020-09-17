<template>
  <section id="quickfacts" class="snippets">
    <h3 class="section-header">Snippets</h3>
    <div class="snippet-list">
      <!-- SNIPPET ITEM -->
      <ul class="snippet" v-for="(snippet, index) in snippets" :key="index">
        <li class="title">{{ snippet.name }}</li>
        <li v-for="(item, index) in snippet.items" :key="index">
          <span v-if="!snippet.link">{{ item }}</span>
          <a v-else target="_blank" rel="noopener" :href="item.link">{{
            item.name
          }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    snippets: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
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
.title {
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
  content: '  |';
  padding-right: 10px;
  padding-left: 20px;
}
li:last-child {
  padding-right: 0;
}
</style>
