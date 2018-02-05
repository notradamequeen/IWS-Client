import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    riskTypeList: [],
    riskTypeDetail: {},
    fieldList: [],
  },
  actions: {
    GET_RISK_TYPE_LIST: async function({ commit }) {
      const opt = {
        method:'GET',
          // mode:'cors',
        headers: {
          // 'Access-Control-Allow-Origin':'*',
          'Accept': 'application/json'
        }
      };
      const res = await fetch('https://intense-bayou-56091.herokuapp.com/iws/api/risktype/', opt).then((response)=>
        response.json())
        // .then((res)=>{
        commit('RISK_TYPE_MUTATION', res);
        // })
    },
    GET_RISK_TYPE_DETAIL: async function({ commit }, id) {
      const opt = {
        method:'GET',
          // mode:'cors',
        headers: {
          // 'Access-Control-Allow-Origin':'*',
          'Accept': 'application/json'
        }
      };
      const res = await fetch(`https://intense-bayou-56091.herokuapp.com/iws/api/risktype/${id}`, opt).then((response)=>
        response.json())
        // .then((res)=>{
      commit('RISK_TYPE_DETAIL_MUTATION', res);
        // })
    },
    GET_FIELD_LIST: async function({ commit }) {
        const opt = {
          method:'GET',
            // mode:'cors',
          headers: {
            // 'Access-Control-Allow-Origin':'*',
            'Accept': 'application/json'
          }
        };
        const res = await fetch('https://intense-bayou-56091.herokuapp.com/iws/api/', opt).then((response)=>
          response.json())
          // .then((res)=>{
          commit('FIELD_LIST_MUTATION', res);
          // })
      },
  },
  mutations: {
    RISK_TYPE_MUTATION: (state, riskTypeList) => {
      state.riskTypeList = riskTypeList;
    },
    RISK_TYPE_DETAIL_MUTATION: (state, riskTypeDetail) => {
      state.riskTypeDetail = riskTypeDetail;
    },
    FIELD_LIST_MUTATION: (state, fieldList) => {
        state.filedList = fieldList;
      },
  },
  getters: {
    riskTypeList: (state) => {
      return state.riskTypeList;
    },
    riskTypeOptions: (state) => {
      const options = state.riskTypeList.map((item) => {
        return { value: item.id, text: item.name };
      });
      return options;
    },
    riskTypeDetail: (state) => {
      return state.riskTypeDetail;
    },
    fieldList: (state) => {
        return state.fieldList;
    }
  },
});

export default store;
