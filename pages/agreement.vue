<template>
  <v-app :style="'background-color:' + background + ';'">
    <v-main>
      <v-app-bar elevation="0">
        <v-container>
          <v-row class="pt-11 pb-5">
            <v-col md="8">
              <a href="/"><img src="~/static/logo.png" /></a>
            </v-col>
            <v-col md="4" class="text-right d-flex">
              <div class="px-8">
                <v-select
                  v-model="language"
                  :items="allLanguages"
                  item-text="name"
                  item-value="code"
                  return-object
                  label="Select language"
                  class="py-1"
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
      <v-container>
      <compareAgreementText />
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
    return {
      language: {},
    };
  },
  computed: {
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
    changeLanguage() {
      this.$i18n.setLocale(this.language.code);
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
</style>
