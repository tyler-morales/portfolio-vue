<template>
  <ul v-if="!snippet.link" class="snippet">
    <li class="title">{{ snippet.name }}</li>
    <li v-for="(item, index) in snippet.items" :key="index">
      {{ item }}
    </li>
  </ul>
  <ul v-else class="snippet">
    <li class="title">{{ snippet.name }}</li>
    <li v-for="(item, index) in snippet.items" :key="index">
      <a target="_blank" :href="item.link">{{ item.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    snippet: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
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
  content: '|';
  padding-right: 10px;
  padding-left: 20px;
}
</style>
