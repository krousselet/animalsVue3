<template>
<Home>
  <Mobilemenu></Mobilemenu>
</Home>
</template>

<script>
import Home from '@/components/Home-component.vue'
import Mobilemenu from '@/components/Mobilemenu-component.vue'
export default {
  name: 'HomeView',
  components: {
    Home,
    Mobilemenu,
  }
}
</script>
