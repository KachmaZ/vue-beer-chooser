<template>
  <div class="home">
    <PersonalAccount :user="currentUser" />
    <YourBeer :beer="currentBeer" />
  </div>
</template>

<script>
// @ is an alias to /src
import PersonalAccount from "@/components/v-user-account.vue";
import YourBeer from "@/components/v-your-beer.vue";
import { mapActions, mapGetters } from "vuex";

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

  async created() {
    this.fetchRandomBeer();
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 70%;
  margin: 20px 15% 0;
  display: flex;
  justify-content: space-around;
}

@media screen and (max-width: 750px) {
  .home {
    width: 100%;
    margin: 0;
  }
}
</style>