<template>
  <div class="project"></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.project {
  padding-top: 150px;
  max-width: 80vw;
  margin: 0 auto;

  @include breakpoint(md) {
    padding: 50px;
    padding-top: 75px;
  }

  @include breakpoint(sm) {
    padding: 20px;
    padding-top: 75px;
  }
}
</style>
