<template>
  <div id="contact-page">
    <Nav_Bar_Menu />
    <LoginPage />
    <FooterSection />
  </div>
</template>

<script>
import Nav_Bar_Menu from '@/components/Nav_Bar_Menu';
import LoginPage from '@/components/LoginPage';
import FooterSection from '@/components/FooterSection';

export default {
  name: 'App',
  components: {
    Nav_Bar_Menu,
    LoginPage,
    FooterSection
  },
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
