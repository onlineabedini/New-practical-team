<template>
  <!-- html -->
  <div>
    <app_header></app_header>
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>
<script>

//this is for java script

import app_header from '@/components/header/header.vue';

export default {
  components: {
    app_header
  }
}
</script>
<style scoped>
/* this is for css */
.container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 50px;
}
</style>
