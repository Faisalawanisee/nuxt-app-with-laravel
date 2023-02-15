<template>
  <v-app :style="'background-color:' + background + ';'">
    <v-main>
      <v-app-bar elevation="0">
        <v-container>
          <v-row>
            <v-col class="py-0 col-md-8 col d-flex align-center" md="8">
              <div class="mt-1">
                <nuxt-link to="/"><img src="~/static/logo3.png" style="max-width: 15%" /></nuxt-link>
              </div>
            </v-col>
            <v-col md="4" class="text-right py-0 d-flex justify-space-between align-center">
              <nuxt-link v-if="currentLangs == 'ur'" class="invoices" :to="$route.path == '/ur/invoices' ? '/ur/compare' : '/ur/invoices'">{{ $route.path == '/ur/invoices' ? $t('Home') : $t('Invoices') }}</nuxt-link>
              <nuxt-link v-else class="invoices" :to="$route.path == '/invoices' ? '/compare' : '/invoices'">{{ $route.path == '/invoices' ? 'Home' : $t('Invoices') }}</nuxt-link>
              <nuxt-link v-if="currentLangs == 'ur'" class="invoices" to="/ur/refunds" >{{ $t("Refunds") }}</nuxt-link>
              <nuxt-link v-else class="invoices" to="/refunds" >{{ $t("Refunds") }}</nuxt-link>
              <nuxt-link
                class="invoices"
                to="/logout"
              >
                {{ $t("logout") }}
              </nuxt-link>
              <div class="w-30 text-right">
                <v-select
                  solo
                  dense
                  hide-details
                  v-model="language"
                  :items="allLanguages"
                  item-text="name"
                  item-value="code"
                  return-object
                  label="Select language"
                  class="px-4"
                  @change="changeLanguage()"
                ></v-select>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>
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
  middleware: "auth",
  data() {
    return {
      language: { "name": "English", "code": "en", "iso": "en-US", "file": "en-US.js"},
    };
  },
  beforeMount() {
    this.heartBreatCallback();
  },
  computed: {
    currentLangs() {
     return this.$store.state.currentLang;
    },
    background() {
      return this.$store.state.yellowBg;
    },
    allLanguages() {
      return this.$i18n.locales;
    },
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
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
    changeLanguage() {
      this.$i18n.setLocale(this.language.code);
      console.log(this.language.code , 'test');
      this.$store.commit('AddCurrentLang', this.language.code);
    },
  },
};
</script>

<style scoped>
select {
  border: 1px solid;
  border-radius: 3px;
  padding: 5px 8px;
}
.invoices {
  text-decoration: none;
  color: primary;
  font-size: 15px;
  font-weight: 600;
  padding: 8px 10px;
  border-radius: 5px;
}
.invoices:hover {
  background-color: #FCBA03;
  color: #fff;
}
.w-30 {
  width: 50%;
}
</style>
