<template>
  <div class="progress-container">
    <div class="progress-bar" id="myBar"></div>
  </div>
</template>

<script>
// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction()
}

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight
  var scrolled = (winScroll / height) * 100
  document.getElementById('myBar').style.width = scrolled + '%'
}
export default {}
</script>

<style lang="scss" scoped>
.progress-container {
  width: 100%;
  height: 8px;
  background: Rgba($color-tertiary/ $lighten);
  position: fixed;
  top: 0;
  z-index: 10;
}

.progress-bar {
  height: 8px;
  background: Rgb($color-tertiary);
  // background: linear-gradient(
  //     217deg,
  //     rgba(255, 0, 0, 0.8),
  //     rgba(255, 0, 0, 0) 70.71%
  //   ),
  //   linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
  //   linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
  width: 0%;
}
</style>
