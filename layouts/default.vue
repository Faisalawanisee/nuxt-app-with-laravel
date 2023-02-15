<template>
  <v-app :style="'background-color:' + background + ';'">
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer absolute app>
      <span
        >&copy; {{ new Date().getFullYear() }}
        {{ $store.state.info["site_name"] }}</span
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
  beforeMount() {
    this.heartBreatCallback();
  },
  computed: {
    background() {
      return this.$store.state.yellowBg;
    },
  },
  methods: {
    async heartBreatCallback() {
      try {
        await this.$store.dispatch("fetchData");
      } catch (error) {
        this.$toast.error("Server Error.");
      }
    },
  },
};
</script>
