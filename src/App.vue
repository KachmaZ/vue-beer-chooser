<template>
<div>
  <PersonalAccount :user="currentUser" />
  <RecommendedBeer :beer="currentBeer" />
</div>
</template>

<script>
import PersonalAccount from "./components/v-personal-account.vue"
import RecommendedBeer from "./components/v-your-beer.vue"
import {mapActions, mapGetters} from "vuex"

export default {
  name: 'App',
  components: {
    PersonalAccount,
    RecommendedBeer,
  },

  computed: {
    ...mapGetters(["currentUser", "currentBeer"]),
  },

  methods: {
    ...mapActions(["fetchRandomUser", "fetchRandomBeer"]),
  },

  async mounted(){
    this.fetchRandomUser();
    this.fetchRandomBeer();
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
