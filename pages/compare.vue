<template>
  <div>
    <component :is="'compare-' + steps[currentStep]"></component>
  </div>
</template>

<script>
export default {
  layout: "compare",
  data() {
    return {
      steps: [
        'brands',
        'search',
        'comparee',
        'final',
      ]
    }
  },
  computed: {
    currentStep() {
      return this.$store.state.currentStep;
    },
  },
  mounted() {
    // this.$store.commit('SetStep', 0);
  },
  methods: {
    nextStep() {
      this.$store.commit("NextStep");
    },
    prevStep() {
      this.$store.commit("PrevStep");
    },
  },
};
</script>
