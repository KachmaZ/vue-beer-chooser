// Root component

<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "@/components/v-header.vue";
import {mapActions, mapMutations} from "vuex"

export default {
  components: {
    Header,
  },

  methods: {
    ...mapMutations(["setMobileNav"]),
    ...mapActions(["fetchRandomUser"])
  },

  mounted() {
    this.fetchRandomUser();
    window.addEventListener('click', () => this.setMobileNav(false))
  }
};
</script>

<style>
@font-face {
  font-family: "Taverna";
  src: local("Taverna"), url(./fonts/Taverna.ttf) format("truetype");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  min-width: 350px;
  padding-top: 50px;

  position: relative;
  
  font-family: Taverna, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
