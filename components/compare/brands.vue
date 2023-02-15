<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col class="col-md-4">
          <v-card class="mt-6">
            <h2 class="text-center py-10">{{ $t("Select Brands") }}</h2>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-10">
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="brand in getBrands"
          :key="brand.id"
        >
          <v-card
            class="fill-height d-flex align-center justify-center overflow-hidden"
            @click="toggleBrand(brand)"
            height="240px"
          >
            <div class="absolute">
              <SvgCheck v-if="brand.selected" />
            </div>
            <img :src="brand.logo" style="max-width:100%"/>
          </v-card>
        </v-col>
      </v-row>
      <div class="text-right mt-10">
        <v-btn
        v-if="hasSelected"
          class="text-capitalize font-weight-regular shadow-light"
          color="#fff"
          @click="$store.commit('NextStep')"
          >{{$t('Next')}}</v-btn
        >
        <v-btn
        v-else
          class="text-capitalize font-weight-regular shadow-light"
          disabled
          color="#fff"
          @click="$store.commit('NextStep')"
          >{{$t('Next')}}</v-btn
        >
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: "",
    };
  },
  mounted() {
    this.$store.commit("changeBg", "var(--v-primary-base)");
     this.$store.dispatch("fetchCustomers");
  },
  computed: {
    getBrands() {
      return this.$store.state.brands;
    },
    hasSelected(){
        return this.$store.state.brands.find((b) => b.selected);
    },
  },
  methods: {
    toggleBrand(brand) {
      this.$store.commit("toggleBrand", brand);
    },
  },
};
</script>

<style scoped>
.absolute {
  position: absolute;
  top: 8px;
  right: 12px;
}
</style>
