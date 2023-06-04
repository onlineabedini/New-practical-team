<template>
  <div>
    <h1 class="text-center">{{ requested_sample.title }}</h1>
    <p class="text-center">
      {{ requested_sample.description }}
    </p>
    <div class="text-center">
      <img src=requested_sample.img_url class="w-75 p-3" >


      <p class="text-right " style="margin-top: 70px;margin-left: 170px;">
        {{ requested_sample.data }}
      </p>
    </div>
  </div>
</template>
<script>
export default {

  data(){
    return{
      requested_sample:[],
      id :1
    }
  },
  layout: 'pages',
  mounted() {
    this.id =this.$route.params.id
      this.$axios.get('http://localhost:8080/api/sample/'+this.id)
      .then(response => {
        this.requested_sample = response.data
        console.log(this.requested_sample)
      })
      .catch(error => { console.log(error) })

  }
}

</script>
<style scoped></style>
