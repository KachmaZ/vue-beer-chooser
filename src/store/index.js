import { createStore } from 'vuex'
import user from "./user"
import beer from "./beer"

export default createStore({
  mutations: {
    setLoading(state, status) {
      state.loading = status;
    }
  },

  state: {
    loading: false,
  },

  getters: {
    loading: state => state.loading,
  },

  modules: {
    user, 
    beer,
  }
})
