import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        ContactList: []
    },
    actions: {
        Contact_List({commit}, res){
            commit('Contact_List', res);
        }
    },
    mutations: {
        Contact_List(state, payload){
            state.ContactList = payload;
        }
    },
    getters: {
        ContactList: state => state.ContactList
    }
})