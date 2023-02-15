<template>
  <div class="bg-info py-10 mt-5">
    <v-container>
      <div class="text-center">
        <h1 class="headings pt-3">{{ $t("Recent Blog Posts") }}</h1>
        <p class="pb-12">
          Recent Blog Posts Consequatur libero assumenda est voluptatem est
          quidem illum et officia imilique qui vel architecto accusamus fugit
          aut qui distinctio
        </p>
      </div>
      <v-row class="pb-12">
        <v-col cols="12" md="4" sm="6" v-for="data in cardData" :key="data">
          <v-card
            class="mx-auto rounded-lg fill-height blogs-card-shadow"
            max-width="100%"
          >
            <img
              style="width: 100%; height: 230px"
              :src="require(`~/static/images/${data.image}`)"
            />
            <div class="mx-5 pt-4 text-subtitle-1">{{ data.subtitle }}</div>
            <div class="title py-2 mx-4">
              <a href="/">{{ data.title }}</a>
            </div>
            <div class="d-flex px-6 pt-5">
              <div>
                <img
                  width="50px"
                  height="50px"
                  class="rounded-circle"
                  :src="require(`~/static/images/${data.avatar}`)"
                  alt=""
                />
              </div>
              <div class="ml-5">
                <p class="mb-2">{{ data.name }}</p>
                <p>{{ data.date }}</p>
              </div>
            </div>
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
      cardData: [
        {
          image: "blog-1.jpg",
          subtitle: "Politics",
          title: "Dolorum optio tempore voluptas dignissimos",
          avatar: "blog-1.jpg",
          name: "Maria Doe",
          date: "Jan 1, 2022",
        },
        {
          image: "blog-2.jpg",
          subtitle: "Sport",
          title: "Nisi magni odit consequatur autem nulla dolorem",
          avatar: "blog-2.jpg",
          name: "Allisa Mayer",
          date: "Jun 5, 2022",
        },
        {
          image: "blog-3.jpg",
          subtitle: "Entertainment",
          title: "Possimus soluta ut id suscipit ea ut in quo quia et soluta",
          avatar: "blog-3.jpg",
          name: "Mark Dower",
          date: "Jun 22, 2022",
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
.title a {
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  padding: 0;
  color: #000;
}
.title a:hover {
  color: #fcba03;
}
</style>