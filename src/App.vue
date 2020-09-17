<template>
  <div id="app">
    <NavBar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
export default {
  components: {
    NavBar,
    Footer
  },
  mounted() {
    let greeting = `                                                       
@@@  @@@  @@@@@@@@  @@@       @@@        @@@@@@   @@@  
@@@  @@@  @@@@@@@@  @@@       @@@       @@@@@@@@  @@@  
@@!  @@@  @@!       @@!       @@!       @@!  @@@  @@!  
!@!  @!@  !@!       !@!       !@!       !@!  @!@  !@   
@!@!@!@!  @!!!:!    @!!       @!!       @!@  !@!  @!@  
!!!@!!!!  !!!!!:    !!!       !!!       !@!  !!!  !!!  
!!:  !!!  !!:       !!:       !!:       !!:  !!!       
:!:  !:!  :!:        :!:       :!:      :!:  !:!  :!:  
::   :::   :: ::::   :: ::::   :: ::::  ::::: ::   ::  
 :   : :  : :: ::   : :: : :  : :: : :   : :  :   :::  
                                                       `
    console.log(greeting)
    console.log('Feel free to Peek around!')
  }
}
</script>

<style lang="scss">
#app {
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
}
</style>
