// Main state file

import { createStore } from 'vuex'
import user from "./user"
import beer from "./beer"
import menu from "./menu"

export default createStore({
  modules: {
    user, 
    beer,
    menu,
  }
})
