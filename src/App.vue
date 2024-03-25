<template>
  <Mobilemenu v-if="generalStore.hamburgerMobileMenuIsActive === 1"></Mobilemenu>
  <Navbar>
  </Navbar>
  <router-view />
  <Footer></Footer>
</template>
<script setup>
import { useGeneralStore } from './stores/generalStore';
const generalStore = useGeneralStore();
</script>
<script>
import Navbar from '@/components/Navbar-component.vue'
import Mobilemenu from '@/components/Mobilemenu-component.vue'
import Footer from '@/components/Footer-component.vue'
export default {
  components: {
    Navbar,
    Mobilemenu,
    Footer,
  }
}
</script>

<style lang="scss">
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {


  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

$mainColor: rgba(128, 128, 128, 0.74);

//*********************** REUSABLE KEYFRAMES ***********************************/
@keyframes underlining {
  100% {
    width: 100%;
  }
}
</style>
