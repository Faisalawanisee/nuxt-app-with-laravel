<template>
  <div class="py-8">
    <v-btn icon small @click="$router.go(-1)" class="mt-n4 mb-4">
      <SvgBackArrow />
    </v-btn>
    <Refunds />
  <div v-if="$store.state.auth.loggedIn">
      <h3 class="mb-4">{{ $t("Refunds") }}</h3>
    <v-data-table
      v-if="refunds"
      items-per-page="5"
      :headers="headers"
      :items="refunds"
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
  </div>
</template>

<script>
export default {
  layout: "compare",
  data() {
    return {
      loading: false,
      invoiceNumber: "",
      activator: [],
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

    this.$store.commit("changeBg", "var(--v-primary-base)");
     this.$store.dispatch("fetchRefunds");
  },
  methods: {
    showDetail(item) {
      let invoice_id = item.id;
      if (this.currentLangs == 'ur') {
       return  this.$router.push("/ur/refunds/" + item.id);
      } else {
        this.$router.push("/refunds/" + item.id);
      }
    },
   async convertInRefund() {
      this.loading = true;
        const res = await this.$axios.$put("/change-type", {
          invoice_number: this.invoiceNumber,
        });
        this.invoiceNumber = '';
        this.loading = false;
        if (res.type == 'refund') {
          this.$toast.success("Converted into refund Successfully.");
           this.$store.commit("updateRefunds" , res);
        } else {
          this.$toast.error("Refund date are exceeded!");
        }
    },
  },
  computed:{
       refunds() {
       let getrefunds = this.$store.state.refunds;
       return getrefunds;
    },
    currentLangs() {
     return this.$store.state.currentLang;
    },
  }
};
</script>