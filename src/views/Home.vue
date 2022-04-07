<template>
  <div class="home">
    <PersonalAccount :user="currentUser" />
    <YourBeer :beer="currentBeer" />
  </div>
</template>

<script>
// @ is an alias to /src
import PersonalAccount from "@/components/v-user-account.vue"
import YourBeer from "@/components/v-your-beer.vue"
import {mapActions, mapGetters} from "vuex"

export default {
  name: "Home",

  components: {
    PersonalAccount,
    YourBeer,
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
};
</script>

<style lang="scss" scoped>
.home {
  width: 70%;
  margin: 100px 15%;
  display: flex;
  justify-content: space-around;
}
</style>