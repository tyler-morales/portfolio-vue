<template>
  <!-- STACKED CARDS -->
  <div v-if="strategy.infoArc" class="vertical-sliding-cards">
    <section class="card-item">
      <div class="card-item__text">
        <h3 class="card-item__text--heading">Information Architecture</h3>
        <p>{{ strategy.infoArc.description }}</p>
      </div>
      <img :src="strategy.infoArc.image" loading="lazy" />
    </section>

    <section class="card-item">
      <div class="card-item__text">
        <h3 class="card-item__text--heading">Information Design</h3>
        <p>{{ strategy.interaction.description }}</p>
      </div>
      <img :src="strategy.interaction.image" loading="lazy" />
    </section>
  </div>
</template>

<script>
export default {
  props: {
    strategy: {
      type: Object,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.vertical-sliding-cards {
  max-width: 90vw;
  @include breakpoint(sm) {
  }
  .card-item {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    align-items: center;
    height: auto;
    position: sticky;
    border-radius: 20px;
    margin: 0 auto;
    margin-bottom: 40px;
    top: 100px;
    padding: 3rem;
    box-shadow: var(--shadow-light);
    background: #fafafa;
    border: 2px solid black;

    @include breakpoint(md) {
      grid-template-columns: 1fr;
    }

    @include breakpoint(sm) {
      padding: 20px;
    }

    &__text {
      &--heading {
        width: 100%;
      }

      p {
        color: var(--light-gray);
      }
    }
  }
}
</style>
