<template>
    <!-- html -->
    <div>
      
        <div class="mxdivw">
          <img :src="blog_img_link" class="mximgw">
          <h3>{{blog_title }}</h3>
          <p>{{ blog_description }}</p>
        </div>
      
    </div>
    
  
  </template>
  <script>
  
  //this is for java script
  export default {
  props: ["blog_img_link", "blog_title", "blog_description"]
}
  
  </script>
  <style scoped>
  
  /* this is for css */
  .mxdivw{
    max-width: 200px;
    max-height: 400px;
    margin: 10px;
  }
  
  .mximgw{
    max-width: 180px;
  }
  </style>