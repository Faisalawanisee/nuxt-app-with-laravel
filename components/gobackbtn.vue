<template>
  <div>
    <v-btn
      class="text-capitalize font-weight-regular shadow-light"
      :color="color ? color : '#fff'"
      @click="$store.commit('PrevStep')"
    >
      {{ $t("back") }}
    </v-btn>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    color: String,
  },
};
</script>
