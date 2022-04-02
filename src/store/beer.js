// Beer info state
export default {
    actions: {  
      // Fetch one random beer from API
      async fetchRandomBeer(ctx) {
        
        const res = await fetch("https://random-data-api.com/api/beer/random_beer");
        const beer = await res.json();
  
        ctx.commit("updateCurrentBeer", beer);
      },
    },
  
    mutations: {
    updateCurrentBeer(state, currentBeer) {
        state.currentBeer = currentBeer;
      },
    },
  
    state: {
      currentBeer: {}, 
    },
  
    getters: {
        currentBeer(state){

            console.log(state.currentBeer);
            return state.currentBeer
        }
    },
  };