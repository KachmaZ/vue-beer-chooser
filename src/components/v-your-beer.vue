<template>
  <div class="beer">
    <h2>Recommended beer</h2>
    <span class="brand">Brand: {{ beer.brand }}</span><br>
    <span class="name">Name: {{ beer.name }}</span><br>
    <span class="style">Style: {{ beer.style }}</span><br>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    beer: Object,
  },
  computed: {
    ...mapGetters(["currentBeer"]),
  },
};
</script>

<style lang="scss" scoped>
</style>