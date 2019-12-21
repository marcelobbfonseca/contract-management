<template>
  <v-app>
    <header-component/>
    <left-menu/>
    <v-content>
      <router-view/>
    </v-content>
    <footer-component/>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import LeftMenu from './components/LeftMenu'

export default {
  name: 'App',

  components: {
    // HelloWorld,
    LeftMenu,
    HeaderComponent,
    FooterComponent
  },

  data: () => ({
    //
  }),
};
</script>

<style>
h1, h2, h3, p, span, div {
  font-family: 'DDINRegular', Courier, monospace;
}
</style>
