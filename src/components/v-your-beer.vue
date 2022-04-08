<template>
  <div class="beer">
    <h2 :class="{ hidden: beerLoading }" class="beer-title">Your beer</h2>
    <div class="beer-img" :class="{ loading: beerLoading }"></div>
    <div class="beer-desc">
      <Loader v-if="beerLoading" />
      <template v-else>
        <span class="brand">Brand: {{ beer.brand }}</span>
        <span class="name">Name: {{ beer.name }}</span>
        <span class="style">Style: {{ beer.style }}</span>
      </template>
    </div>
    <div @click="fetchRandomBeer" class="beer-choose">
      <span> Choose </span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Loader from "@/components/v-loader.vue";

export default {
  props: {
    beer: Object,
  },

  computed: {
    ...mapGetters(["currentBeer", "beerLoading"]),
  },

  methods: {
    ...mapActions(["fetchRandomBeer"]),
  },

  components: {
    Loader,
  },
};
</script>

<style lang="scss" scoped>
.beer {
  width: 200px;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & .beer-title {
    width: 100%;
    height: 50px;

    &.hidden {
    visibility: hidden !important;
    }
  }

  & .beer-img {
    width: 150px;
    height: 150px;

    background-image: url("../assets/beer.png");
    background-size: cover;
    background-position: center;

    border: 10px solid #6b2b01;
    border-radius: 20px;

    transition: 250ms linear;
    transition-property: transform;

    &.loading {
      background-image: url("../assets/question-marks.png");
      transform: rotate(45deg);

      transition: 250ms linear;
      transition-property: transform;
    }
  }

  & .beer-desc {
    width: 100%;
    height: 150px;
    padding: 10px;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    text-align: left;

    & .loader {
      width: 80px;
      margin: auto;
    }
  }

  & .beer-choose {
    width: 90%;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #faebd7;
    font-size: 24px;

    background-color: #d47100;

    border-radius: 10px;

    cursor: pointer;
  }
}
</style>