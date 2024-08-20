<template>
  <div id="home-page">
    <Nav_Bar_Menu />
    <HomePage />
    <SearchForm />
    <PictureGallery />
    <ServiceGallery />
    <WhyCutify />
    <TestimonialSection />
    <FooterSection />
  </div>
</template>

<script>
import Nav_Bar_Menu from '@/components/Nav_Bar_Menu';
import HomePage from '@/components/HomePage';
import SearchForm from '@/components/SearchForm';
import PictureGallery from '@/components/PictureGallery';
import ServiceGallery from '@/components/ServiceGallery';
import WhyCutify from '@/components/WhyCutify';
import TestimonialSection from '@/components/TestimonialSection';
import FooterSection from '@/components/FooterSection';

export default {
  name: 'App',
  components: {
    Nav_Bar_Menu,
    HomePage,
    SearchForm,
    PictureGallery,
    ServiceGallery,
    WhyCutify,
    TestimonialSection,
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
