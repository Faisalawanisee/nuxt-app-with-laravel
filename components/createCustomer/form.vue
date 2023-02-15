<template>
  <v-container class="mt-4 mx-n3">
    <h3>{{ $t("Create Customer") }}</h3>
    <div>
      <form @submit.prevent="submit">
        <v-text-field
          v-model="name"
          :counter="15"
          :label="$t('Name')"
          required
        ></v-text-field>
        <v-text-field
          v-model="phone"
          :counter="14"
          :label="$t('Phone')"
          required
        ></v-text-field>
        <v-text-field
          v-model="address"
          :label="$t('Address')"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :label="$t('Password')"
          required
        ></v-text-field>
        <v-btn
          small
          color="primary"
          class="mr-4 mt-2 float-right"
          type="submit"
        >
        {{ $t("submit") }}
        </v-btn>
      </form>
    </div>
  </v-container>
</template>


<script>
export default {
  props:['show'],
  props: {
   show: false,
},
  data: () => ({
    loading: false,
    phone: '',
    password: '',
    name: '',
    address:'',
  }),

  methods: {
   async submit() {
    this.loading = true;
      try {
         const res = await this.$axios.$post("/new-customers", {
          phone: this.phone,
          password: this.password,
          name: this.name,
          address: this.address,
        });

        this.name = "";
        this.phone = "";
        this.address = "";
        this.password = "";
        
        this.$store.commit('AddCustomers', res);
        this.$store.commit("AddCustomersId", res.id);

        if (res) {
          this.loading = false;
          this.$toast.success("Customer Created Successfully.");
          this.$emit("change", true);
        }
      } catch (error) {
        this.$toast.error(error);
      }
    },
  },
};
</script>