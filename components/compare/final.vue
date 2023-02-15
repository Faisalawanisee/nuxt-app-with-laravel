<template>
  <v-container>
    <template v-if="isReadyToDownload">
      <CompareDownload :data="invoiceData" />
    </template>
    <template v-else>
      <div class="mt-5 mb-2">
        <h2>{{ $t("Compare Prices") }}</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>{{ $t("Products Name") }}</th>
            <th>{{ $t("Brands") }}</th>
            <th>{{ $t("Quantity") }}</th>
            <th>{{ $t("Unit Price") }}</th>
            <th>{{ $t("Total Price") }}</th>
            <th>{{ $t("Action") }}</th>
          </tr>
        </thead>
        <tbody>
          <tr :id="'product-row-' + product.id " v-for="(product, index) in selections" :key="index">
            <td>
              <div class="d-flex align-center">
                <img height="60" :src="product.image" />
                <p class="ml-5">{{ product.name }}</p>
              </div>
            </td>
            <td>{{ product.brand_name }}</td>
            <td>
              <div class="width-30 mx-auto">
                <v-text-field
                  outlined
                  dense
                  type="number"
                  min="1"
                  v-model="getproductsTemp[index].qty"
                  @input="changeQty(product)"
                ></v-text-field>
              </div>
            </td>
            <td>{{ product.price }}</td>
            <td>{{ getTotalPrice(product) }}</td>
            <td>
              <v-icon color="red" @click="deletEvent(product)"
                >mdi-trash-can-outline</v-icon
              >
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="font-weight-bold">{{ $t("Total Amount") }} :</td>
            <td class="font-weight-bold">{{ grandtotal(product) }}</td>
          </tr>
        </tbody>
      </table>
      <div class="mt-4 mx-n3" v-if="role == 'representative'">
        <createCustomer />
      </div>
      <div class="mt-2" v-if="selections.length">
        <v-checkbox v-model="checkbox">
          <span slot="label"
            >{{ $t("I agree to the") }}
            <a target="_blank" href="/agreement"
              >Zubair Enterprises Terms & Conditions</a
            >.
          </span>
        </v-checkbox>
      </div>
      <div class="d-flex justify-space-between mt-10">
        <gobackbtn color="primary" />
        <v-btn
          v-if="checkbox == true"
          class="text-capitalize font-weight-regular shadow-light"
          color="primary"
          to
          @click="submit()"
          :loading="loading"
          ><v-icon class="mr-2">mdi-check</v-icon
          >{{ $t("Download Submit") }}</v-btn
        >
        <v-btn
          v-else
          class="text-capitalize font-weight-regular shadow-light"
          color="primary"
          disabled
          ><v-icon class="mr-2">mdi-check</v-icon
          >{{ $t("Download Submit") }}</v-btn
        >
      </div>
    </template>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      isReadyToDownload: false,
      invoiceData: [],
      checkbox: false,
      numberRule: (val) => {
        if (val < 0) return "Please enter a positive number";
        return true;
      },
      total: "",
      getproductsTemp: [],
    };
  },
  mounted() {
    this.$store.commit("changeBg", "var(--v-info-base)");
  },
  computed: {
    selections() {
      let selections = this.$store.state.selections;
      this.getproductsTemp = JSON.parse(JSON.stringify(selections));
      return selections;
    },
    role() {
      return this.$store.state.auth.user.role;
    },
  },
  methods: {
    async submit() {
      this.loading = true;
      try {
        const result = await this.$axios.$post(`/new-invoice`, {
          invoiceProducts: this.selections,
          customer_id: this.$store.state.customer_id,
        });
        
        if (result) {
          this.loading = false;
          console.log('res' , result.data);
          this.invoiceData = result.data;
          this.isReadyToDownload = true;
          this.$toast.success("Quotation Submited Successfully.");
          this.$store.commit("ResetSelections");
        }
      } catch (error) {
        this.$toast.error(error);
      }
    },
    getTotalPrice(product) {
      let t = product.price * product.qty;
      this.total = t;
      return t;
    },
    grandtotal() {
      let getSelections = this.selections;
      let total = 0;
      for (let index = 0; index < getSelections.length; index++) {
        const item = getSelections[index];
        total += item["price"] * item["qty"];
      }
      return total;
    },
    deletEvent(product) {
      var row = document.getElementById("product-row-" + product.id);
      // console.log(row);
      row.classList.add("removing-row");
      const that = this;
      setTimeout(function () {
        that.$toast.success("Product Removed.");
        row.classList.remove("removing-row");
        row.style.display = "none";
        that.$store.commit("selectionUnselectByID", product);
      }, 500);
    },
    changeQty(product) {
      const p = JSON.parse(JSON.stringify(product));
      p.qty = this.getproductsTemp.find((i) => i.id == p.id)?.qty;
      this.$store.commit("selectionUpdateByID", p);
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #a7a7a7;
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
}
table tbody tr td:first-child {
  text-align: left;
}
table tbody tr:last-child td {
  border: none;
}
.width-30 {
  width: 30%;
}
.removing-row {
  background: rgba(216, 83, 127, 0.25);
}
</style>
