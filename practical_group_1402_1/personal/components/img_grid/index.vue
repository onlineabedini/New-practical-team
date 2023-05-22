<template>
  <!-- html -->
  <div class="main">
    <div class="row ">
      <div class="col-6">
        <SingleGridImg :ImgLink='Pic1.Link' :Title='Pic1.title'></SingleGridImg>
        <SingleGridImg :ImgLink='Pic2.Link' :Title='Pic2.title'></SingleGridImg>
      </div>
      <div class="col-6">
        <SingleGridImg :ImgLink='Pic3.Link' :Title='Pic3.title'></SingleGridImg>
        <SingleGridImg :ImgLink='Pic4.Link' :Title='Pic4.title'></SingleGridImg>
      </div>
    </div>


  </div>
</template>
<script>
//this is for java script

import SingleGridImg from './singleGridPic.vue'

export default {
  data() {
    return {
      Pic1: {
        Link: '/img/2.jpg',
        title: 'پروژه'
      },
      Pic2: {
        Link: '/img/4.jpg',
        title: 'مقاله'
      },
      Pic3: {
        Link: '/img/3.jpg',
        title: 'دانشگاه'
      },
      Pic4: {
        Link: '/img/5.jpg',
        title: 'سرگرمی'
      }
    }
  },

  components: {
    SingleGridImg
  }

}

</script>
<style scoped>
/* this is for css */
</style>