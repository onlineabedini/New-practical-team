<template>
    <div>
      <div class="border ">
        <img :src="image" alt="blog image" />
        <div class="p-5">
          <h5 class="text-center">{{ title }}</h5>
          <p class="text-center">{{ description }}</p>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default{
    props: ["image", "title", "description"]
  }
  </script>
  <style scoped>
  /*  */
  </style>
  