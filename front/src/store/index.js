import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import girls from './allGirls'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		allGirls: null    
	},
	getters : {
	    	GIRLS : state => {
			return state.allGirls;
		}
	},
	mutations: {
		SET_GIRLS : (state,payload) => {
			state.allGirls = payload
		},
		ADD_GIRLS : (state,payload) => {
			state.allGirls.push(payload)
		},
	},
	actions : {
		GET_GIRLS : async (context,payload) => {
			let { data } = await Axios.get('http://localhost:8081/api/girls')
			context.commit('SET_GIRLS',data)
		}
		// SAVE_GIRLS : async (context,payload) => {
		// 	let { data } = await Axios.post('http://yourwebsite.com/api/todo')
		// 	context.commit('ADD_TODO',payload)
		// },
	}  
      })
