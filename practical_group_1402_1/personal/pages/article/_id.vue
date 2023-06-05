<template>
  <!-- html -->
  <div>
    <div class="text-center h2">
      {{ one_article.title }}
    </div>
    <div class="text-center h4">
      {{ one_article.description }}
    </div>
    <div class="text-center">
      <div>
        <!-- Photo section  -->
        <img :src=" one_article.img_url" alt="Image" class="w-75" >
      </div>
    </div>
      <br><br>
    <div class="h5 pt-5">
         {{ one_article.content }}
    </div> 
  </div>
</template>

<script>
//this is for java script
export default {
  layout: 'pages',
  data() {
    return{
      one_article:[],
      id:1
    }
  },
  mounted(){
    this.id=this.$route.params.id
     this.$axios.get('http://localhost:8080/api/article/' + this.id)
    .then(response => {
        this.one_article = response.data
        console.log(this.one_article)
      })
      .catch(error => { console.log(error) })

  }
}
</script>

<style scoped>
/* this is for css */
</style>
