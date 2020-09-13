<template>
  <div class="lighthouse">
    <div class="lighthouse--title">
      <h3>Lighthouse Scores</h3>
      <h5>According to Chrome's Lighthouse scores</h5>
    </div>
    <div class="lighthouse__scores">
      <div
        class="score-circle"
        v-for="(score, index) in lighthouse"
        :key="index"
      >
        <vue-circle
          :progress="score.score"
          :size="200"
          line-cap="round"
          :start-angle="getDegAngle"
          :animation="animation"
          insert-mode="append"
          empty-fill="rgba(0, 0, 0, .1)"
        >
        </vue-circle>
        <span>{{ score.name }} {{ score.icon }}</span>
      </div>
    </div>
    <a class="link--report " target="_blank" :href="report"
      >Generate Detailed Report</a
    >
  </div>
</template>

<script>
import VueCircle from 'vue2-circle-progress/src/index.vue'

export default {
  props: {
    lighthouse: { type: Array, required: false },
    results: { type: Object, required: false }
  },
  components: {
    VueCircle
  },
  data() {
    return {
      animation: {
        duration: 5000,
        easing: 'circleProgressEasing'
      }
    }
  },
  computed: {
    getDegAngle: function() {
      // angle from 0 radians
      const DEG = 270
      const RAD = DEG * (Math.PI / 180)
      return RAD
    },
    report: function() {
      let url = this.results.lighthouseReport
      let link = `https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2F${url}%2F`
      return link
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin-top: 10px;
  margin-bottom: 20px;
}

.description {
  margin-top: 5px;
  max-width: 85%;
  line-height: 22px;
  margin-bottom: 10px;
}
a {
  margin-top: 50px;
  margin: 0 auto;
}
.lighthouse {
  margin-top: 100px;

  &--title {
    text-align: center;
    margin-bottom: 100px;
  }

  &__scores {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 40px;

    .score-circle {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      color: Rgb($color-tertiary);
      font-size: 24px;
    }
  }
}
</style>
