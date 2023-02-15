<template>
  <div>
    <v-app-bar
      color="#FCC01A"
      height="40px"
      elevation="0"
    >
    <v-conatiner>
      <div class="px-8 w-100">
        <v-row>
          <v-col md="6" class="md-d-flex sm-d-block">
            <v-btn text color="#fff" class="font-weight-400">
              <v-icon class="mr-1">mdi-email</v-icon>
              dummytest123@gmail.com
            </v-btn>
            <v-btn text color="#fff" class="font-weight-400">
              <v-icon class="mr-1">mdi-phone</v-icon>
              +092 029323009
            </v-btn>
          </v-col>
          <v-col md="6" class="text-right">
            <v-btn icon color="#fff" class="font-weight-400 mr-n4">
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn icon color="#fff" class="font-weight-400 mr-n4">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon color="#fff" class="font-weight-400 mr-n4">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon color="#fff" class="font-weight-400">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-conatiner>
      
    </v-app-bar>
    <v-app-bar
      color="#FCBA03"
      height="60px"
      elevation="0"
      fixed
      class="pt-2"
    >
    <v-container>
      <div class="d-flex justify-space-between w-100">
        <v-col class="cols col-md-9 col-sm-12">
          <div class="pt-2">
            <a href="/"><img src="~/static/whitelogo.svg" style="max-width: 12%" /></a>
          </div>
        </v-col>
        <v-col class="cols col-md-3 col-sm-12">
          <div class="d-flex justify-space-between">
            <div class="mt-1 pt-3">
              <nuxt-link class="login ml-n16" to="/login" v-if="$store.state.auth.loggedIn == false">{{$t("Start Comparison")}}</nuxt-link>
              <nuxt-link class="login ml-n16" to="/compare" v-else>{{ $t("Start Comparison") }}</nuxt-link>
            </div>
            <div class="w-20 mt-2">
              <v-select
                solo
                dense
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
          </div>
        </v-col>
      </div>
    </v-container>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        language: { "name": "English", "code": "en", "iso": "en-US", "file": "en-US.js" },
      }
    },
    computed: {
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
  }
  }
</script>

<style scoped>
.v-icon.v-icon {
  font-size: 14px !important;
}
.login {
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border-bottom: 2px solid transparent;
}
.login:hover {
 border-color: red;
}
.w-100 {
  width: 100%;
}
.font-weight-400 {
  font-weight: 400;
}
.w-20 {
  width: 70%;
}
</style>
