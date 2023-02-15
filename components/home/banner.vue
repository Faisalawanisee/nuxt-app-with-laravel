<template>
  <div>
    <v-banner color="primary" class="py-16">
      <v-container>
        <v-row class="mt-10">
          <v-col cols="12" md="7">
            <div class="white--text my-16 hero">
              <h2 class="mt-16 mb-8 font-size-48">{{ $t("Welcome to Takhleq") }}</h2>
              <p class="font-weight-normal mb-5">
                Sed autem laudantium dolores. Voluptatem itaque ea consequatur
                eveniet. Eum quas beatae cumque eum quaerat.
              </p>
              <v-btn elevation="0" rounded x-large color="#fff" class="mb-md-16"
                >{{ $t('Get Started') }}</v-btn
              >
            </div>
          </v-col>
          <v-col cols="12" md="5">
            <div class="mb-md-16">
              <SvgHero-img />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-banner>
    <v-container>
      <v-row class="mt-md-n16">
        <v-col cols="12" md="3" sm="6">
          <v-card
            class="text-center py-16 mt-md-n15 white--text custom-hover"
            elevation="4"
          >
            <div>
              <v-icon>mdi-diamond-stone</v-icon>
            </div>
            <h2>Lorium Ipsum</h2>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" sm="6">
          <v-card
            class="text-center py-16 mt-md-n15 white--text custom-hover"
            elevation="4"
          >
            <div>
              <v-icon>mdi-diamond-stone</v-icon>
            </div>
            <h2>Sed ut perspiciatis</h2>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" sm="6">
          <v-card
            class="text-center py-16 mt-md-n15 white--text custom-hover"
            elevation="4"
          >
            <div>
              <v-icon>mdi-map-marker-outline</v-icon>
            </div>
            <h2>Magni Dolores</h2>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" sm="6">
          <v-card
            class="text-center py-16 mt-md-n15 white--text custom-hover"
            elevation="4"
          >
            <div>
              <v-icon>mdi-map-marker-outline</v-icon>
            </div>
            <h2>Nemo Enim</h2>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<style scoped>
.v-icon.v-icon {
  font-size: 60px;
  color: rgba(255, 255, 255, 0.6);
}
.custom-hover {
  background-color: #fcba03;
}
.custom-hover:hover .v-icon.v-icon {
  color: #fff;
}
.custom-hover:hover {
  background-color: #be9113;
  cursor: pointer;
  color: #fff;
}
.hero p {
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
  font-size: 0.875rem;
}
.font-size-48 {
  font-size: 48px;
  line-height: normal;
}
</style>