// Header/sidebsar menu state module
export default {
  actions: {},

  mutations: {
    toggleMobileNav(state) {
      state.mobileNav = !state.mobileNav;
    },

    setMobileNav(state, value) {
        state.mobileNav = value
    },

    setWindowWidth(state) {
      state.windowWidth = window.innerWidth;
      if (state.windowWidth <= 750) {
        state.mobile = true;
        return;
      }

      state.mobile = false;
      state.mobileNav = false;
      return;
    },
  },

  state: {
    mobile: true,
    mobileNav: false,
    windowWidth: null,
  },

  getters: {
    mobile: (state) => state.mobile,
    mobileNav: (state) => state.mobileNav,
    windowWidth: (state) => state.windowWidth,
  },
};
