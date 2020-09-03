<template>
  <div class="fact">
    <img :src="fact.image" alt="" class="fact--icon" />
    <h4>{{ fact.title }}</h4>
    <p>{{ fact.description }}</p>
    <div class="fact__tags">
      <span
        class="fact__tags--tag"
        v-for="(tag, index) in fact.tags"
        :key="index"
        >{{ tag }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fact: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.fact {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h4 {
    font-weight: 500;
  }

  *:not(:last-child) {
    margin-bottom: 10px;
  }

  &--icon {
    width: 50px;
    height: auto;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    color: Rgba($color-primary / $semi-light);
    margin-top: 10px;

    &--tag:not(:last-child) {
      margin-right: 15px;
    }
  }
}
</style>
