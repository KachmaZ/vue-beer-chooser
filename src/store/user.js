// User info state
export default {
    actions: {  
      // Fetch one random user from API
      async fetchRandomUser(ctx) {
        
        const res = await fetch("https://random-data-api.com/api/users/random_user");
        const user = await res.json();
  
        ctx.commit("updateCurrentUser", user);
      },
    },
  
    mutations: {
    updateCurrentUser(state, currentUser) {
        state.currentUser = currentUser;
      },
    },
  
    state: {
      currentUser: {}, 
    },
  
    getters: {
        currentUser(state){

            console.log(state.currentUser);
            return state.currentUser
        }
    },
  };