import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    initialiseStore(state) {
			if (localStorage.getItem('store')) {
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
			}
    },
    addItem(state, item) {
      item.id = + new Date();
      state.list.push(item);
    },
    onSelectItems(state, value) {
      state.list.forEach(item=>{
        item.checked = value;
      })
    }
  },
  actions: {

    DELETE({state}) {

      for (let i = 0; i < state.list.length; i++) {
        if (state.list[i].checked) {
          state.list.splice(i--, 1)
        }
      }
      localStorage.setItem('store', JSON.stringify(state));
      
    }
  }
});