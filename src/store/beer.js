// Beer info state module
export default {
  actions: {
    // Fetch random beer from API
    async fetchRandomBeer(ctx) {
      ctx.commit("setBeerLoading", true);
      setTimeout(async () => {
        const res = await fetch(
          "https://random-data-api.com/api/beer/random_beer"
        );
        const beer = await res.json();

        ctx.commit("updateCurrentBeer", beer);
        ctx.commit("setBeerLoading", false);
      }, 1000);
    },
  },

  mutations: {
    updateCurrentBeer(state, currentBeer) {
      state.currentBeer = currentBeer;
    },

    setBeerLoading(state, status) {
      state.beerLoading = status;
    },
  },

  state: {
    currentBeer: {},

    beerLoading: false,
  },

  getters: {
    currentBeer: (state) => state.currentBeer,

    beerLoading: (state) => state.beerLoading,
  },
};
