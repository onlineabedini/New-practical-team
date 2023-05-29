<template>
  <!--FOR HTML-->
  <div>
    <div class="main row mb-4 rounded-3">
      <div class="col-5 ">
        <img :src="img_link" class="image_sample">
      </div>
      <div class="text-center col-7 mx-0">
        <h4>{{ My_title }}</h4>
        <h5><small>{{ My_description }}</small></h5>
      </div>
    </div>
  </div>
</template>

<script>
//FOR JAVASCRIPT
export default {
  props: ["img_link", "My_title", "My_description"]
}
</script>

<style scoped>
/* FOR CSS */
.main {
  height: 200px;
  box-shadow: 2px 2px 2px 2px rgba(14, 134, 233, 0.3);
  margin: auto;
  width: 75%;
  align-items: center;
}

.title {
  margin-bottom: auto;
  padding: 20px;
}

.image_sample {
  height: 190px;
  width: 100%;
}
</style>