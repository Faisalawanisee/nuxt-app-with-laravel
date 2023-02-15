<template>
  <div class="py-8">
    <v-btn icon small @click="$router.go(-1)" class="mt-n4 mb-4">
      <SvgBackArrow />
    </v-btn>
    <h3 class="mb-4">{{ $t("Invoices") }}</h3>
    <v-data-table
      v-if="myInvoices.data"
      :headers="headers"
      :items="myInvoices.data"
      items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:item.activator="{ item }">
        <v-btn fab x-small icon v-bind="attrs" @click="showDetail(item)">
          <v-icon> mdi-eye </v-icon>
        </v-btn>
        <v-btn fab x-small icon v-bind="attrs" :href="item.downloadLink">
          <v-icon> mdi-download </v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <div v-else>
      <v-skeleton-loader
        class="mx-auto"
        type="table-heading, table-tbody"
      ></v-skeleton-loader>
    </div>
  </div>
</template>

<script>
export default {
  layout: "compare",
  data() {
    return {
      activator: [],
      myInvoices: [],
      headers: [
        { text: "NUMBER", value: "invoice_number" },
        { text: "DISCOUNT", value: "discount" },
        { text: "AMOUNT", value: "amount" },
        { text: "Status", value: "status" },
        { text: "Actions", value: "activator" },
      ],
    };
  },
  mounted() {
    this.getMyInvoices();
    this.$store.commit("changeBg", "var(--v-primary-base)");
  },
  methods: {
    async getMyInvoices() {
      const invoices = await this.$axios.$get("/invoice");
      this.myInvoices = invoices;
    },
    showDetail(item) {
      let invoice_id = item.id;
      if (this.currentLangs == 'ur') {
       return  this.$router.push("/ur/invoices/" + item.id);
      } else {
       return  this.$router.push("/invoices/" + item.id);
      }
    },
  },
  computed: {
    currentLangs() {
     return this.$store.state.currentLang;
    },
  },
};
</script>