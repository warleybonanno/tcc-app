<template>
  <div id="app">
    <Navbar :logo='logo_src' :alt='app_name'/>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/navigation-components/navbar/NavbarComponent.vue';
import Footer from './components/navigation-components/footer/FooterComponent.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      logo_src: '/img/Logo-ITS-Edu.svg',
      app_name: 'ITS Edu - Calculadora de Honorários Advocáticios.',
    };
  },
};
</script>

<style >
  #app {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: #000226;
  }

  p, h1, h2, h3 {
    color: #FFFFFF;
  }
</style>
