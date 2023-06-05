<template>
  <div>
    <div class="container p-3">
    <div class="border d-flex mt-5">
      <img class="w-25" :src="image" />
      <div class="text-center mx-auto mt-3">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
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
