<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "@/components/v-header.vue";
export default {
  components: {
    Header,
  },
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
  font-family: Taverna, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
