<template>
  <div class="py-md-16 py-sm-4">
    <v-container>
      <div class="text-center">
        <h1 class="headings">{{ $t("Our Team") }}</h1>
        <p class="pb-10 pt-3">
          Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro
          nihil id ratione ea sunt quis dolorem dolore earum
        </p>
      </div>
      <v-row>
        <v-col
          class="fill-height"
          md="3"
          sm="6"
          v-for="member in members"
          :key="member"
        >
          <v-card class="pa-4 rounded-lg team-card-shadow">
            <img
              class="rounded-lg"
              :src="require(`~/static/images/${member.image}`)"
              style="width: 100%; height: 250px"
            />
            <div class="text-center">
              <h3 class="pt-2">{{ member.name }}</h3>
              <p class="p-italic mb-5">{{ member.field }}</p>
            </div>
            <div class="d-flex justify-space-between">
              <v-btn fab icon outlined rounded small
                ><v-icon>mdi-twitter</v-icon></v-btn
              >
              <v-btn fab icon outlined rounded small
                ><v-icon>mdi-facebook</v-icon></v-btn
              >
              <v-btn fab icon outlined rounded small
                ><v-icon>mdi-instagram</v-icon></v-btn
              >
              <v-btn fab icon outlined rounded small
                ><v-icon>mdi-linkedin</v-icon></v-btn
              >
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
      members: [
        {
          image: "team-1.jpg",
          name: "Walter White",
          field: "Web Development",
        },
        {
          image: "team-2.jpg",
          name: "Sarah Jhinson",
          field: "Marketing",
        },
        {
          image: "team-3.jpg",
          name: "William Anderson",
          field: "Content",
        },
        {
          image: "team-4.jpg",
          name: "Amanda Jepson",
          field: "Accountant",
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-btn:before {
  color: #c9c8c8 !important;
  width: 40px !important;
  height: 40px !important;
  border: 1px solid #bbbbbb !important;
}
.v-btn--fab.v-size--small:hover {
  color: #fcba03;
}
.p-italic {
  font-style: italic;
}
</style>