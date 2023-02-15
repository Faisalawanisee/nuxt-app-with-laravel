<template>
  <v-container>
    <div class="text-center py-4">
      <h1 class="headings">{{ $t("About Us") }}</h1>
      <p class="pb-4">
        Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro
        incidunt dolores placeat sunt id nobis omnis tiledo stran delop
      </p>
    </div>
    <v-row>
      <v-col cols="12" md="6" sm="10" class="px-8">
        <div>
          <h2>Voluptatem dignissimos provident quasi corporis</h2>
          <img
            class="rounded-lg my-7"
            src="~/static/images/about.png"
            style="max-width: 100%"
          />
          <p>
            Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis
            quod nisi et. Placeat debitis quia recusandae odit et consequatur
            voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.
          </p>
          <p>
            Temporibus nihil enim deserunt sed ea. Provident sit expedita aut
            cupiditate nihil vitae quo officia vel. Blanditiis eligendi possimus
            et in cum. Quidem eos ut sint rem veniam qui. Ut ut repellendus
            nobis tempore doloribus debitis explicabo similique sit. Accusantium
            sed ut omnis beatae neque deleniti repellendus.
          </p>
        </div>
      </v-col>
      <v-col cols="12" md="6" sm="10" class="px-8">
        <p class="p-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          <v-icon color="primary" class="mr-3">mdi-check-circle</v-icon>Ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          <v-icon color="primary" class="mr-3">mdi-check-circle</v-icon>Duis
          aute irure dolor in reprehenderit in voluptate velit.
        </p>
        <div class="d-flex">
          <v-icon color="primary" class="mr-3 mt-n12">mdi-check-circle</v-icon>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate trideta storacalaperda
            mastiro dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <p>
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
        </p>
        <img
          class="rounded-lg my-7"
          src="~/static/images/sample.webp"
          style="max-width: 100%"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.position-relative {
  position: relative;
}
.p-italic {
  font-style: italic;
}
</style>