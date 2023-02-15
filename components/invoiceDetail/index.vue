<template>
  <div class="py-8">
     <v-btn icon small @click="$router.go(-1)" class="mt-n4">
      <SvgBackArrow />
    </v-btn>
    <h4 class="mb-3">{{ $t("Invoice Details") }}</h4>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">{{ $t("NUMBER") }}</th>
            <th class="text-left">{{ $t("AMOUNT") }}</th>
            <th class="text-left">{{ $t("DISCOUNT") }}</th>
            <th class="text-left">{{ $t("Status") }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in singleInvoice" :key="item.name">
            <td>{{ item.invoice_number }}</td>
            <td>{{ item.amount }}</td>
            <td>{{ item.discount }}</td>
            <td>{{ item.status }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <h4 class="mt-6 mb-3">{{ $t("Products") }}</h4>
    <v-data-table
      v-if="singleInvoice.data"
      :headers="headers"
      :items="singleInvoice.data.products"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "Id", value: "id" },
        { text: "Price", value: "price" },
        { text: "Quantity", value: "quantity" },
      ],
      singleInvoice: [],
    };
  },
  mounted() {
    this.getSingleInvoice();
    this.$store.commit("changeBg", "var(--v-primary-base)");
  },
  methods: {
    async getSingleInvoice() {
      const invoices = await this.$axios.$get(
        "/invoice/" + this.$route.params.id
      );
      this.singleInvoice = invoices;
    },
  },
};
</script>