<template>
  <div class="row">
    <div class="main col-6">
      <img :src="img_link">

    </div>
    <div class="col-3">
      <h4>{{ My_title }}</h4>
    </div>
    <div class="col-3">
      <h4>{{ My_description  }}</h4>
    </div>
</div>
  </template>
  <script>

  export default {
    Props:["img_link","My_title", "My_description"]
    
  }
  </script>
  <style scoped>
    .main {
      height: 200px;
  box-shadow: 2px 2px 5px 2px rgba(14, 134, 233, 0.3);
}
  </style>