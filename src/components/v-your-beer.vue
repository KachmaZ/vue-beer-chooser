// Beer info component

<template>
  <div class="beer">
    <h2 :class="{ hidden: beerLoading }" class="beer-title">Your beer</h2>
    <div class="beer-img" :class="{ loading: beerLoading }"></div>
    <div class="beer-desc-wrapper">
      <div class="beer-desc">
        <Loader v-if="beerLoading" />
        <template v-else>
          <span class="brand" :title="beer.brand">Brand: {{ beer.brand }}</span>
          <hr />
          <span class="name" :title="beer.name">Name: {{ beer.name }}</span>
          <hr />
          <span class="style" :title="beer.style">Style: {{ beer.style }}</span>
        </template>
      </div>
    </div>
    <div @click="fetchRandomBeer" class="beer-choose">
        <span> Choose </span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
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
    ...mapMutations(["toggleMobileNav"]),
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

  border: 2px solid #daa700;
  border-radius: 20px;

  & .beer-title {
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

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
      transform: scale(0.8) rotate(45deg);

      transition: 250ms linear;
      transition-property: transform;
    }
  }

  & .beer-desc-wrapper {
    width: 100%;
    height: 140px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    font-size: 18px;
    text-align: left;
  }

  & .beer-desc {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    overflow: hidden;

    & .loader {
      width: 80px;
      margin: auto;
    }
  }

  & .beer-choose {
    width: 90%;
    height: 50px;
    margin: 5%;

    position: relative;
    z-index: -1;

    background-color: #d49c00;

    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #ffffff;
    font-size: 24px;
    text-shadow: 4px 3px 0 #292929, 2px 2px 2px #ce593700;
    overflow: hidden;

    cursor: pointer;

    & span {
      z-index: 20;
    }

    &:after {
      background: #fff;
      content: "";
      height: 155px;
      left: -75px;
      opacity: 0.2;
      position: absolute;
      top: -50px;
      transform: rotate(35deg);
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      width: 50px;
      z-index: 10;
    }

    &:hover:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
}

@media screen and (max-width: 750px) {
  .beer {
    width: 90%;
    height: 90%;
    margin: 0 5%;
    border: 0;

    & .beer-img {
      width: 300px;
      height: 300px;
    }

    & .beer-desc-wrapper {
      max-width: 300px;

      font-size: 20px;
    }

    & .beer-choose {
      max-width: 300px;
    }
  }
}
</style>