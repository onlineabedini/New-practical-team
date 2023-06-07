<template>
  <div>
    <app_header></app_header>
    <div class="container">
      <Nuxt />
      <!-- button designed by amir.a -->
      <button type="button" class="btn btn-success floatmenu">ارتباط با کارشناس</button>
    </div>
    <app_footer></app_footer>
  </div>
</template>
<script>
import app_header from "@/components/header/header.vue";
import app_footer from "@/components/footer/footer.vue";

export default {
  components: {
    app_header,
    app_footer
  },
};
</script>
<style scoped>
.container{
  max-width: 1500px;
  margin: 0 auto;
  padding: 50px;
}
.floatmenu{
    position: fixed;
    max-width: 90px;
    bottom: 40px;
    right: 10px;
    
    }
</style>
