<template>
  <!-- html -->
  <div class="mainDiv">

    <div class="pic" :style="{ backgroundImage: 'url(' + ImgLink + ')' }">
      <div>
        <h1>{{ Title }}</h1>
      </div>

    </div>


  </div>
</template>
<script>

//this is for java script
export default {
  props: ['ImgLink', 'Title']
}

</script>
<style scoped>
/* this is for css */


.pic {

  background-size: cover;
  width: 100%;
  cursor: pointer;
  background-color: rgb(46, 45, 45);
  color: antiquewhite;
  font-weight: bold;
  background-blend-mode: soft-light;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

}
</style>
