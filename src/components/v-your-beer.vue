<template>
  <div class="beer">
    <h2>Recommended beer</h2>
    <div class="beer-img" :class="{ chosen: chosen }"></div>
    <div class="beer-desc">
      <span class="brand">Brand: {{ beer.brand }}</span
      ><br />
      <span class="name">Name: {{ beer.name }}</span
      ><br />
      <span class="style">Style: {{ beer.style }}</span
      ><br />
    </div>
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
  data() {
    return {
      chosen: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.beer-img {
  width: 150px;
  height: 150px;

  background-image: url("../assets/question-marks.png");
  background-size: cover;
  background-position: center;

  border: 10px solid #a5bdbb;
  border-radius: 20px;

  &.chosen {
    background-image: url("../assets/beer.png");
  }
}
</style>