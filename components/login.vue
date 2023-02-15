<template>
  <div class="my-8 mt-n2 ">
    <v-row>
      <v-col md="9"></v-col>
      <v-col md="3">
        <div class="text-right py-0 d-flex align-center px-5 mb-n10">
          <v-btn
          color="white"
          class="mx-2 text-capitalize font-weight-regular shadow-light py-2"
            to="/"
        >{{ $t("Home") }}</v-btn>
          <v-select
            solo
            dense
            v-model="language"
            :items="allLanguages"
            item-text="name"
            item-value="code"
            return-object
            label="Select language"
            class=" mt-6"
            @change="changeLanguage()"
          ></v-select>
        </div>
      </v-col>
    </v-row>
    <v-row v-if="showLoginForm" justify="center">
      <v-col class="col-md-6">
        <v-card class="px-10 mt-10 login-card-shadow">
          <div class="text-center py-5">
            <img src="~/static/logo.svg" style="max-width: 30%" />
          </div>
          <div :class="availableLocales[0].name == 'Urdu' ? ' ' : 'text-right'">
            <h2>
              {{ actionBtnText == "Login" ? $t("Login") : $t("Register") }}
            </h2>
            <p>
              {{
                actionBtnText == "Login"
                  ? $t("Please Login to Continue")
                  : $t("Please Register to Continue")
              }}
            </p>
          </div>
          <div>
            <v-form class="pb-5" method="post" @submit.prevent="formSubmit">
              <div
                v-if="isRegister"
                :class="
                  availableLocales[0].name == 'Urdu'
                    ? ' '
                    : 'text-right font-weight-regular'
                "
              >
                <span class="font-weight-regular">{{ $t("Name") }} :</span>
                <v-text-field outlined dense v-model="name" ></v-text-field>
              </div>
              <div
                :class="availableLocales[0].name == 'Urdu' ? ' ' : 'text-right'"
              >
                <span class="font-weight-regular">{{ $t("Phone") }} :</span>
                <v-text-field outlined dense v-model="phone"  counter="11" :rules="rules"></v-text-field>
              </div>
              <div
                v-if="isRegister"
                :class="availableLocales[0].name == 'Urdu' ? ' ' : 'text-right'"
              >
                <span class="font-weight-regular">{{ $t("Adress") }} :</span>
                <v-text-field outlined dense v-model="address" />
              </div>
              <div
                :class="availableLocales[0].name == 'Urdu' ? ' ' : 'text-right'"
              >
                <span class="font-weight-regular">{{ $t("Password") }} : </span>
                <v-text-field
                  outlined
                  dense
                  v-model="password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  :type="showPassword ? 'text' : 'password'"
                ></v-text-field>
              </div>
              <!-- <div>
                <v-btn
                  color="#E8F0FE"
                  class="text-capitalize mt-2 mb-5"
                  block
                  v-for="locale in availableLocales"
                  :key="locale.code"
                  @click.prevent.stop="$i18n.setLocale(locale.code)"
                  >{{ locale.name }}</v-btn
                >
              </div> -->
              <div class="mb-5">
                <v-btn block color="primary" type="submit" :loading="loading">{{
                  actionBtnText == "Login" ? $t("Login") : $t("Register")
                }}</v-btn>
              </div>
            </v-form>
            <v-alert class="pb-5" v-if="message" :type="messageType">
              {{ message }}
              <v-progress-circular
                v-if="messageType == 'success'"
                indeterminate
                color="white"
                width="2"
                size="15"
                class="ml-2"
              ></v-progress-circular>
            </v-alert>
            <v-divider v-if="loading == false" class="pa-5"></v-divider>
            <div class="pb-5 text-center">
              <v-btn
                color="success"
                type="submit"
                v-if="loading == false"
                @click="switchRegisterLogin"
                >{{
                  secondBtnText == "Login" ? $t("Login") : $t("Register")
                }}</v-btn
              >
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    rules: [v => v.length <= 11 || 'Please enter valid Mobile Number'],
    isRegister: false,
    showLoginForm: false,
    loading: false,
    showPassword: false,
    phone: "",
    password: "",
    name: "",
    address: "",
    message: "",
    messageType: "error",
    actionBtnText: "Login",
    secondBtnText: "Register",
    language: { "name": "English", "code": "en", "iso": "en-US", "file": "en-US.js" },
  }),
  beforeMount() {
    this.alreadyLoggedin();
  },
  mounted() {
    this.$store.commit("changeBg", "var(--v-primary-base)");
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
    switchRegisterLogin() {
      this.isRegister = !this.isRegister;

      if (this.isRegister) {
        this.actionBtnText = "Register";
        this.secondBtnText = "Login";
      } else {
        this.secondBtnText = "Register";
        this.actionBtnText = "Login";
      }
    },
    formSubmit() {
      this.isRegister ? this.register() : this.login();
    },
    async register() {
      this.loading = true;
      try {
        const that = this;

        const res = await this.$axios.post("/user/register", {
          phone: this.phone,
          password: this.password,
          name: this.name,
          address: this.address,
        });

        this.loading = false;

        this.messageType = "success";
        this.message = "Registered Successfully, Logging In...";

        setTimeout(() => {
          that.$auth.setUser(res.data.user);
          that.$auth.setUserToken(res.data.authorisation.token);
          that.$auth.$storage.setUniversal("user", res.data.user, true);
          window.location = window.location.origin + "/compare";
        }, 2000);
      } catch (e) {
        this.loading = false;
        this.message = e.response.data.message;
      }
    },
    async login() {
      this.loading = true;
      try {
        const that = this;
        const res = await this.$auth.loginWith("local", {
          data: {
            phone: this.phone,
            password: this.password,
          },
        });

        this.loading = false;

        this.messageType = "success";
        this.message = "Logged In Successfully.";
        // console.log(res.data);
        setTimeout(() => {
          that.$auth.setUser(res.data.user);
          that.$auth.setUserToken(res.data.authorisation.token);
          that.$auth.$storage.setUniversal("user", res.data.user, true);
          window.location = window.location.origin + "/compare";
        }, 2000);
      } catch (e) {
        this.loading = false;
        this.message = e.response.data.message;
      }
    },
    alreadyLoggedin() {
      if (this.$store.state.auth.loggedIn) {
        return this.$router.push("/compare");
      }
      this.showLoginForm = true;
    },
    changeLanguage() {
      this.$i18n.setLocale(this.language.code);
    },
  },
};
</script>

<style scoped>
.text-color {
  color: #373c45;
}
</style>
