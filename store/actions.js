export default {
  async fetchData({ state, commit }){
    const res = await this.$axios.$get('data');

    if(res){
      commit('SetBrands', res.brands);
      commit('SetProducts', res.products);
      commit('SetProductNames', res.product_names);
      commit('SetCategories', res.categories);
      commit('SetInfo', res.info);
      commit('SetLoading', false);
    }
  },
  async fetchSettings({ state, commit }) {
    let settings = await this.$axios.$get("/settings");
        commit("setSetting", settings);
  },
  async fetchRefunds({ state, commit }) {
    const res = await this.$axios.$get("/invoices/refund");
    commit('SetRefunds', res);
  },

  async fetchCustomers({ state, commit }) {
    let res = await this.$axios.$get('/all-customers');
    commit('SetCustomers', res);
  },
  
  updateLoading({ state, commit }, val) {
    commit('SetLoading', val);
    return val;
  },
  SetSelections({ state, commit }, data) {
    commit('SetSelections', data);
    return data;
  }
};
