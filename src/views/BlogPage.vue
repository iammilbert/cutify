<template>
  <div id="Blog-page">
    <Nav_Bar_Menu />
    <BlogPage />
    <FooterSection />
  </div>
</template>

<script>
import Nav_Bar_Menu from '@/components/Nav_Bar_Menu';
import BlogPage from '@/components/BlogPage';
import FooterSection from '@/components/FooterSection';

export default {
  name: 'App',
  components: {
    Nav_Bar_Menu,
    BlogPage,
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
