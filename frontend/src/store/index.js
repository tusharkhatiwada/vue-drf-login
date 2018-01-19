import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './state'


Vue.use(Vuex)

export const store = new Vuex.Store({
  state,
})

