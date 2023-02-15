<template>
  <div class="ma-8">
    <div class="text-center ">
      <h2 class="mb-5">Quotation Submitted Successfully</h2>
      <div style="width: 250px;" class="mx-auto">
        <v-img src="/success-circle-green-tick.png" />
      </div>
      <div class="ma-8">
        <v-btn color='primary' elevation="0" :href="data.downloadLink">Download Quotation</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  }
}
</script>
