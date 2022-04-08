// User info state
export default {
  actions: {
    // Fetch one random user from API
    async fetchRandomUser(ctx) {
      ctx.commit("setLoading", true);

      const res = await fetch(
        "https://random-data-api.com/api/users/random_user"
      );
      const user = await res.json();

      ctx.commit("updateCurrentUser", user);
      ctx.commit("setLoading");
    },
  },

  mutations: {
    updateCurrentUser(state, currentUser) {
      state.currentUser = currentUser;
    },

    setLoading(state, status) {
      state.userLoading = status;
    },
  },

  state: {
    currentUser: {},

    userLoading: false,
  },

  getters: {
    currentUser: state => state.currentUser,

    userLoading: state => state.userLoading,
  },
};
