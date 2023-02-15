<template>
  <div class="bg-info pt-10 pb-15">
    <v-container>
      <div class="text-center">
        <h1 class="headings">{{ $t("Our Services") }}</h1>
        <p class="pb-10">
          Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro
          incidunt dolores placeat sunt id nobis omnis tiledo stran delop
        </p>
      </div>
      <v-row>
        <v-col
          cols="12"
          md="4"
          sm="6"
          v-for="service in services"
          :key="service"
        >
          <v-card elevation="0" class="pa-6 rounded-lg custom-hover">
            <div class="icon">
              <v-icon class="icon-size">{{ service.icon }}</v-icon>
            </div>
            <h2 class="py-4 border-bottom">
              <a href="#">{{ service.title }}</a>
            </h2>
            <p class="py-2">{{ service.desc }}</p>
            <a class="text-dacoration-none" href="#"
              >Read More
              <v-icon color="primary" class="aerrow-size"
                >mdi-arrow-right</v-icon
              ></a
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          icon: "mdi-calendar-multiselect",
          title: "Asperiores Commodit",
          desc: "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
        },
        {
          icon: "mdi-calendar-multiselect",
          title: "Eosle Commodi",
          desc: "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
        },
        {
          icon: "mdi-calendar-multiselect",
          title: "Ledo Markt",
          desc: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
        },
        {
          icon: "mdi-calendar-multiselect",
          title: "Asperiores Commodit",
          desc: "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
        },
        {
          icon: "mdi-calendar-multiselect",
          title: "Velit Doloremque",
          desc: "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
        },
        {
          icon: "mdi-calendar-multiselect",
          title: "Dolori Architecto",
          desc: "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.bg-info {
  background-color: #f6f6f6;
}
.border-bottom a {
  text-decoration: none;
  color: #000;
  border-bottom: 4px solid #eeeeee;
  font-weight: 700;
  margin: 0 0 20px 0;
  padding-bottom: 8px;
  font-size: 22px;
}
.v-sheet.v-card:not(.v-sheet--outlined).custom-hover:hover {
  cursor: pointer;
}
.v-sheet.v-card:not(.v-sheet--outlined).custom-hover:hover .icon::before {
  background-color: #20c997;
}
.v-sheet.v-card:not(.v-sheet--outlined).custom-hover:hover .border-bottom a {
  border-color: #fcba03;
}
.icon::before {
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  background: #eeeeee;
  border-radius: 50px;
  z-index: 1;
  top: -8px;
  right: -24px;
  transition: 0.3s;
}
.icon {
  width: 48px;
  height: 48px;
  position: relative;
  margin-bottom: 50px;
}
.icon-size {
  color: var(--color-default);
  font-size: 56px;
  transition: ease-in-out 0.3s;
  z-index: 2;
  position: relative;
}
.text-dacoration-none {
  text-decoration: none;
  font-size: 12px;
}
.aerrow-size {
  font-size: 16px;
}
</style>