<template>
  <v-app :style="'background-color:' + background + ';'">
    <v-main>
      <v-container>
        <!-- <div class="float-right">
          <v-btn
            color="#fff"
            class="text-capitalize font-weight-regular"
            x-small
            href="#"
            v-for="locale in availableLocales"
            :key="locale.code"
            @click.prevent.stop="$i18n.setLocale(locale.code)"
            >{{ locale.name }}</v-btn
          >
        </div> -->
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
    // availableLocales() {
    //   return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    // },
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
