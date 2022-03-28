import { createStore } from 'vuex'

export default createStore({
  state: {
    chocolate: 0,
    vanilla: 0,
    fresa: 0,
    platano: 0,
    cereza: 0,

    fondant: 0,
    merengue: 0,
    chispasChocolate: 0,
    fruta: 0,
    nueces: 0,
  },
  getters: {                      
  },
  mutations: {                    //commit

    peticion(state){
      state.chocolate++;
      state.vanilla++;
      state.fresa++;
      state.platano++;
      state.cereza++;

      state.fondant++;
      state.merengue++;
      state.chispasChocolate++;
      state.fruta++;
      state.nueces++;
    },

    restablecer(state){
      state.chocolate = 0;
      state.vanilla = 0;
      state.fresa = 0;
      state.platano = 0;
      state.cereza = 0;

      state.fondant = 0;
      state.merengue = 0;
      state.chispasChocolate = 0;
      state.fruta = 0;
      state.nueces = 0;
    }
    
    // document.getelementbyid(‘if del check’).checked

    // peticionChocolate(state){
    //   state.chocolate++;
    // },
    // peticionVanilla(state){
    //   state.vanilla++;
    // },
    // peticionFresa(state){
    //   state.fresa++;
    // },
    // peticionPlatano(state){
    //   state.platano++;
    // },
    // peticionCereza(state){
    //   state.cereza++;
    // },

    // subirContador(state, random){
    //   state.contador += random;
    // },
    // bajarContador(state, random){
    //   state.contador -= random;
    // }
  },            
  actions: {                      //dispatch
  },
  modules: {
  }
})
