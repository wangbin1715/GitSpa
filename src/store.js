import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    author: 'WangBin',
    count: 10
  },
  mutations: {
    newauthor (state, msg) {
      state.author = msg
    },
    plus (state) {
      state.count = state.count + 10
    },
    sub (state) {
      state.count = state.count - 5
    }
  },
  getters: {
    ganauthor: (state) => {
      return state.author + '--getter--'
    }
  },
  actions: {
    creact ({commit}) {
    },
    countplus ({commit}) {
      setTimeout(() => { commit('plus') }, 2000)
    },
    countsub ({commit}) {
      commit('sub')
    }
  }
})

export default store
