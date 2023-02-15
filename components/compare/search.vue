<template>
  <div>
    <div class="mt-15">
      <h2 class="mb-8">{{$t('Select Search Products')}}</h2>
      <v-card class="px-5">
        <v-row>
          <v-col class="cols col-md-6 col-sm-6 pt-10 pb-5">
            <v-text-field
              outlined
              dense
              :placeholder="$t('Search by name')"
              v-model="search"
              @input="searchItem"
              @focus="searchItem"
            />
          </v-col>
          <v-col class="cols col-md-6 col-sm-6 pt-10 pb-5">
            <v-select
              :items="categories"
              item-text="name"
              item-value="id"
              :label="$t('Select Category')"
              dense
              outlined
              clearable
              v-model="searchCategory"
            ></v-select>
          </v-col>
        </v-row>
      </v-card>
    </div>
    <div class="mt-4">
      <v-row>
        <template v-if="filteredList.length">
          <v-col class="cols col-md-3 col-sm-6" v-for="(product, index) in filteredList" :key="index">
            <v-card class="px-5 py-4 text-center login-card-shadow">
              <img height="80px" width="100px" :src="getProductImage(product.name)" />
              <h3 class="text-center my-4">{{product.name }}</h3>
              <v-btn
                dense
                outlined
                small
                :color="product.selected ? 'red' : 'primary'"
                class="shadow-light text-capitalize"
                @click="toggleProduct(product.name)"
              >
              {{ product.selected ? $t('Remove from cart') : $t('Add to cart') }}
              </v-btn>
                <div
                  v-if="filteredList.length < 1"
                  class="px-2 py-1 body-2 red--text text--lighten-1"
                >
                  No results found!
                </div>
            </v-card>
          </v-col>
        </template>
        <template v-else>
          <v-col class="cols col-6 offset-3">
            <v-alert
              type="error"
            >No Products Found.</v-alert>
          </v-col>
        </template>
      </v-row>
    </div>
    <div class="d-flex justify-space-between mt-10">
      <Gobackbtn />
      <v-btn
        v-if="selectedProducts.length"
        class="text-capitalize font-weight-regular shadow-light"
        color="#fff"
        @click="$store.commit('NextStep')"
        >{{$t('Next')}}</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchCategory: 0,
      search: "",
    };
  },
  mounted() {
    this.$store.commit("changeBg", "var(--v-primary-base)");
  },
  computed: {
    categories(){
      const cats = this.$store.state.categories;
      let output = [];

      for (let index = 0; index < cats.length; index++) {
        const element = cats[index];
        output.push({id: element.id, name: element.name})
      }

      return output;
    },
    getSelectedBrands() {
      return this.$store.state.selections.brands;
    },
    getProducts() {
      return  this.$store.state.product_names;
      // return  this.$store.state.product_names.filter((p) => p.selected == false);

    },
    selectedProducts() {
      return  this.$store.state.product_names.filter((p) => p.selected);
    },
    filteredList() {
      return this.getProducts.filter((item) => {
        if(this.searchCategory){
          return item.name.toLowerCase().includes(this.search.toLowerCase()) && this.searchCategory == item.category_id;
        } else {
          return item.name.toLowerCase().includes(this.search.toLowerCase())
        }
      });
    },
  },
  methods: {
    getProductImage(name) {
      return this.$store.state.products.find((p) => p.name == name)?.image;
    },
    toggleProduct(product) {
      this.$store.commit("toggleProduct", product);
      // this.search = "";
    },
    deletEvent(product) {
      this.$store.commit("deleteProduct", product);
    },
  },
};
</script>

<style scoped>
.border {
  border: 1px solid #a7a7a7;
}
</style>
