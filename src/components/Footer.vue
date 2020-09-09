<template>
  <footer>
    <a href="#home" class="logo">
      <span>Tmo</span>
      <span>Codes</span>
    </a>
    <div class="links">
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href="mailto:moratyle@gmail.com">Contact</a>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 80vw;
  margin: 50px auto;
  font-size: 16px;

  .logo {
    font-family: 'IBM Plex Sans', sans-serif !important;
    font-weight: 700;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    line-height: 17px;
  }

  .links {
    display: flex;
    gap: 20px;

    & > * {
      font-size: 16px;
    }
  }

  @include breakpoint(md) {
    padding: 50px;
    margin: 0 auto;
    max-width: 90vw;
  }

  @include breakpoint(sm) {
    padding: 20px;
  }
}
</style>
