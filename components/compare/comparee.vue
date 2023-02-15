<template>
  <v-container>
    <div class="mt-5 mb-4">
      <h2>{{ $t("Compare Prices") }}</h2>
    </div>
    <table>
      <thead>
        <tr>
          <th>{{ $t("Products Name") }}</th>
          <th v-for="(brand, index) in getbrands" :key="index">
            {{ brand.name }}
          </th>
          <th>{{ $t("Quantity") }}</th>
          <th>{{ $t("Action") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, pIndex) in getproducts" :key="pIndex">
          <td>
            <div class="d-flex align-center">
              <img height="60" :src="getProduct(product.name)?.image" />
              <p class="ml-5">{{ product.name }}</p>
            </div>
          </td>
          <template v-for="(brand, index) in getbrands">
            <td
              @click="toggleProduct(product, brand.id)"
              :class="
                isSelected(getProduct(product.name, brand.id)?.id)
                  ? 'is-selected'
                  : ''
              "
              :key="'brand' + index"
              v-if="getProduct(product.name, brand.id)?.brand_id == brand.id"
            >
              {{ getProduct(product.name, brand.id)?.price }}
            </td>
            <td
              class="red--text font-weight-bold"
              :key="'brand-' + index"
              v-else
            >
              X
            </td>
          </template>
          <td>
            <div class="width-30 mx-auto">
              <v-text-field
                outlined
                dense
                type="number"
                min="1"
                v-model="getproductsTemp[pIndex].qty"
                @input="changeQty(product)"
              ></v-text-field>
            </div>
          </td>
          <td>
            <v-icon color="red" @click="deletEvent(product)"
              >mdi-trash-can-outline</v-icon
            >
          </td>
        </tr>
      </tbody>
    </table>

    <div class="d-flex justify-space-between mt-10">
      <gobackbtn color="primary" />
      <v-btn
      v-if="hasSelected"
        class="text-capitalize font-weight-regular shadow-light"
        color="primary"
        @click="$store.commit('NextStep')"
        >{{ $t("Save Generate Quote") }}</v-btn
      >
      <v-btn
      v-else
        class="text-capitalize font-weight-regular shadow-light"
        color="primary"
        disabled
        >{{$t('Save Generate Quote')}}</v-btn
      >
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      getproductsTemp: [],
    };
  },
  mounted() {
    this.$store.commit("changeBg", "var(--v-info-base)");
  },
  computed: {
    getproducts() {
      const products = this.$store.state.product_names.filter(
        (p) => p.selected
      );
      this.getproductsTemp = JSON.parse(JSON.stringify(products));
      return products;
    },
    getbrands() {
      return this.$store.state.brands.filter((b) => b.selected);
    },
    hasSelected(){
        return this.$store.state.selections.length > 0;
    },
  },
  methods: {
    changeQty(product) {
      const p = JSON.parse(JSON.stringify(product));
      p.qty = this.getproductsTemp.find((i) => i.name == p.name)?.qty;
      this.$store.commit("productQtyUpdate", p);
      this.$store.commit("selectionUpdateByNames", product);
    },
    getProduct(name, brand_id = null) {
      if (brand_id) {
        return this.$store.state.products.find(
          (p) => p.name == name && p.brand_id == brand_id
        );
      } else {
        return this.$store.state.products.find((p) => p.name == name);
      }
    },
    deletEvent(product) {
      this.$store.commit("toggleProduct", product.name);
      this.$store.commit("selectionDeleteByNames", product);
    },
    isSelected(pid) {
      return this.$store.state.selections.find((s) => s.id == pid);
    },
    toggleProduct(product, brand) {
      const p = this.getProduct(product.name, brand);
      const pn = this.$store.state.product_names.find(
        (p) => p.name == product.name
      );
      const output = {
        name: p.name,
        id: p.id,
        qty: pn.qty,
        price: p.price,
        brand_name: p.brand_name,
        image: p.image
      };
      this.$store.commit("ToggleSelection", output);
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  padding: 10px 20px;
  border-collapse: collapse;
}
table thead tr th {
  text-align: center;
  font-weight: 400;
  padding: 20px;
  border: 1px solid #a7a7a7;
}
table thead tr th:first-child {
  text-align: left;
}
table tbody tr td {
  border: 1px solid #a7a7a7;
  text-align: center;
  padding: 20px;
  cursor: pointer;
}
table tbody tr td:first-child {
  text-align: left;
  cursor: default;
}
/* table tbody tr:last-child td {
  cursor: default;
} */
.width-30 {
  width: 30%;
}
.is-selected {
  background: var(--v-primary-base);
  color: #fff;
}
</style>
