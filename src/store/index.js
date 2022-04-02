import { createStore } from 'vuex'
import user from "./user"
import beer from "./beer"

export default createStore({
  modules: {
    user, 
    beer,
  }
})
