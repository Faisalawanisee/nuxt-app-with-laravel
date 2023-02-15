<template>
  <v-container fluid>
    <v-btn icon small @click="toggle" class="mt-n6" v-if="show == false">
      <SvgBackArrow />
    </v-btn>
    <div v-if="show == true">
      <h3 class="mb-n2">{{ $t("Customers") }}</h3>
      <v-select
        v-model="selectedCustomer"
        :items="customers"
        :label="$t('Select Customer')"
        @change="addCustomerId"
      >
        <template v-slot:prepend-item>
          <v-list-item ripple @mousedown.prevent @click="toggle">
            <v-list-item-action>
              <v-icon>
                {{ icon }}
              </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ $t("Create New") }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="mt-2"></v-divider>
        </template>
      </v-select>
    </div>
    <div v-else>
      <createCustomerForm  @change="show = $event"/>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    fruits: ["Apples", "Apricots", "Avocado"],
    selectedCustomer: [],
    show: true,
  }),
  computed: {
    icon() {
      return "mdi-plus";
    },
    customers() {
      const customers = this.$store.state.customers;
      let name = customers.map((a) => a.name);
      return name;
    },
  },
  methods: {
    toggle() {
      if (this.show == true) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
    addCustomerId() {
      let customer_name =  this.selectedCustomer;
      const customers = this.$store.state.customers;
      let I = customers.find(item => item.name == customer_name);
      this.$store.commit("UpdateCustomersId", I.id);
    },
  },
};
</script>