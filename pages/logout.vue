<template>
  <div class="text-center">
    <v-progress-circular
      :size="50"
      color="amber"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  created: function () {
    this.logout();
  },
  methods: {
    async logout() {
      if (localStorage.getItem("auth._token.local_orignal")) {
        this.$auth.setUserToken(
          localStorage
            .getItem("auth._token.local_orignal")
            .replace("Bearer ", "")
        );
        localStorage.setItem("auth._token.local_orignal", "");
        // window.location = window.location.origin;
        this.$router.push("/");
        return;
      }
      this.$auth.logout();
      this.$axios.setHeader("Authorization", null);
      this.$toast.show("Logged Out Successfully");
      this.$router.push("/");
    },
  },
};
</script>
