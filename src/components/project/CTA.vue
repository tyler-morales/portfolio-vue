<template>
  <section class="cta">
    <h3>Like what you see?</h3>
    <div class="giphy">
      <iframe
        src="https://giphy.com/embed/3o6Mbfsf4DI4Cds5Ms"
        frameBorder="0"
        class="giphy-embed"
      ></iframe>
    </div>
    <a href="mailto:moratyle@gmail.com" class="btn--cta">Let's Talk!</a>
  </section>
</template>
<script>
export default {}
</script>

<style lang="scss" scoped>
.cta {
  text-align: center;
  max-width: 100vw !important;

  h3 {
    margin-bottom: 50px;
  }
}

.giphy {
  width: 100%;
  height: auto;
  margin-bottom: 40px;
}
</style>
