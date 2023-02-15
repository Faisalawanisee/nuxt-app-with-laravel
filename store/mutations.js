export default {
  AddCurrentLang(state, result) {
    state.currentLang = result;
  },
  SetSetting(state, result) {
    state.settings = result;
  },
  SetCustomers(state, result) {
    state.customers = result;
  },
  SetRefunds(state, result) {
    state.refunds = result.data;
  },
  AddCustomersId(state, result) {
    state.customer_id = result.data;
  },
  UpdateCustomersId(state, result) {
    state.customer_id = result;
  },
  AddCustomers(state, result) {
    state.customers.push(result);
  },
  updateRefunds(state, result) {
    state.refunds.push(result);
  },
  SetBrands(state, result) {
    state.brands = result;
  },
  SetProducts(state, result) {
    state.products = result;
  },
  SetProductNames(state, result) {
    state.product_names = result;
  },
  SetCategories(state, result) {
    state.categories = result;
  },
  SetLoading(state, val) {
    state.loading = val;
  },
  SetInfo(state, result) {
    state.info = result;
  },
  changeBg(state, v) {
    state.yellowBg = v
  },
  NextStep(state) {
    state.currentStep++;
  },
  PrevStep(state) {
    state.currentStep--;
  },
  SetStep(state, val) {
    state.currentStep = val;
  },
  toggleBrand(state, brand) {
    let found = state.brands.findIndex(item => item.id == brand.id);
    state.brands[found].selected = !state.brands[found].selected;
  },
  toggleProduct(state, name) {
    let found = state.product_names.findIndex(item => item.name == name);
    state.product_names[found].selected = !state.product_names[found].selected;
  },
  deleteProduct(state, product) {
    let index = state.selections.products.findIndex(product => product == product);
    state.selections.products.splice(index, 1);
  },
  productQtyUpdate(state, product) {
    const temp = state.product_names.findIndex((p) => p.name == product.name);
    state.product_names[temp].qty = product.qty
  },
  productQtyUpdateFinal(state, product) {
    const temp = state.selections.findIndex((p) => p.name == product.name);
    state.selections[temp].qty = product.qty
  },
  ToggleSelection(state, obj){
    let index = state.selections.findIndex((s) => s.id == obj.id);
    if(index == '-1'){
      state.selections.push(obj);
    } else {
      state.selections.splice(index, 1);
    }
  },
  
  selectionUpdateByNames(state, obj){
    let products = state.selections.filter((s) => s.name == obj.name);
    for (let index = 0; index < products.length; index++) {
      const element = products[index];
      //
      let temp = state.selections.findIndex((k) => k.id == element.id);
      state.selections[temp].qty = obj.qty;
    }
  },
  selectionUpdateByID(state, obj){
    let index = state.selections.findIndex((s) => s.id == obj.id);
    state.selections[index].qty = obj.qty;
  },
  selectionUnselectByID(state, obj){
    let index = state.selections.findIndex((s) => s.id == obj.id);
    // let product_names_index = state.product_names.findIndex((s) => s.id == obj.id);
    state.selections.splice(index, 1);
    // state.product_names[product_names_index].selected = false
  },
  selectionDeleteByNames(state, obj){
    let products = state.selections.filter((s) => s.name == obj.name);
    for (let index = 0; index < products.length; index++) {
      const element = products[index];
      //
      let temp = state.selections.findIndex((k) => k.id == element.id);
      // state.selections[temp].qty = obj.qty;
      state.selections.splice(temp, 1);
    }
  },
  SetSelections(state, data) {
    state.selections[data.type] = [data.data];
  },
  ResetSelections(state) {
    for (let index = 0; index < state.brands.length; index++) {
      state.brands[index].selected = false;
    }
    for (let index = 0; index < state.product_names.length; index++) {
      state.product_names[index].selected = false;
    }

    state.selections = [];
  }
 };
