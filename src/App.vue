<template>
  <div id="app">
    <Nav_Bar_Menu v-if="showNavBar" />
    <router-view />
    <FooterSection v-if="showFooter" />
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import Nav_Bar_Menu from '@/components/Nav_Bar_Menu';
import FooterSection from '@/components/FooterSection';

export default {
  name: 'App',
  components: {
    Nav_Bar_Menu,
    FooterSection
  },
  setup() {
    const route = useRoute();
    const showNavBar = route.name === 'Home'; // Show navbar on Home
    const showFooter = route.name === 'Home'; // Show footer on Home

    return {
      showNavBar,
      showFooter
    };
  }
};
</script>

<style>
#app {
  font-family: Sofia Pro, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
