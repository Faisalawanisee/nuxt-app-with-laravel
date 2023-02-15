<template>
  <div class="mb-6">
      <v-text-field
        :label="$t('Enter Invoice Number')"
        solo
        required
        v-model="invoiceNumber"
      ></v-text-field>
      <v-btn v-if="invoiceNumber.length" elevation="1"  @click="convertInRefund()" class=" float-right mt-n2 text-capitalize font-weight-regular shadow-light" :loading="loading">{{ $t("Convert into refund") }}</v-btn>
      <v-btn v-else elevation="1"  disabled class=" float-right mt-n2 text-capitalize font-weight-regular shadow-light" :loading="loading">{{ $t("Convert into refund") }}</v-btn>
    </div>
</template>

<script>
export default {
  layout: "compare",
  data() {
    return {
      loading: false,
      invoiceNumber: "",
    };
  },
  mounted() {
     this.$store.dispatch("fetchRefunds");
  },
  methods: {
   async convertInRefund() {
      this.loading = true;
        const res = await this.$axios.$put("/change-type", {
          invoice_number: this.invoiceNumber,
        });
        this.invoiceNumber = '';
        this.loading = false;
        if (res == 1) {
          this.$toast.info("Invoice alraedy refunded.");
        }
       
        if (res.type == 'refund') {
          this.$toast.success("Converted into refund Successfully.");
           this.$store.commit("updateRefunds" , res);
        }

        if (res.type == 'invoice' || res.type == 'quotation') {
           this.$toast.error("Refund date are exceeded!");
        }
    },
  },
};
</script>