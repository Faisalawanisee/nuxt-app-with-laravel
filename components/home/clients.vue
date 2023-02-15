<template>
  <div class="py-md-12 py-sm-2">
    <v-container>
      <v-row>
        <v-col cols="12" md="6" sm="6">
          <div>
            <SvgState />
          </div>
        </v-col>
        <v-col cols="12" md="6" sm="6" class="pt-15">
          <div class="d-flex my-md-6 my-sm-6">
            <h2>232</h2>
            <p class="mt-3 ml-5">
              <strong>{{ $t("Happy Clients") }}</strong> consequuntur quae diredo para mesta
            </p>
          </div>
          <v-divider></v-divider>
          <div class="d-flex my-md-6 my-sm-6">
            <h2>521</h2>
            <p class="mt-3 ml-5">
              <strong>{{ $t("Projects") }}</strong> adipisci atque cum quia aut
            </p>
          </div>
          <v-divider></v-divider>
          <div class="d-flex my-md-6 my-sm-6">
            <h2>553</h2>
            <p class="mt-3 ml-5">
              <strong>{{ $t("Hours Of Support ") }}</strong> aut commodi quaerat
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
h2 {
  font-size: 40px;
  display: block;
  font-weight: 700;
  color: #fcba03;
  line-height: 40px;
}
p {
  color: #313131;
  font-size: 14px;
}
</style>