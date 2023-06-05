<template>
  <div>
    <h1 class="text-center">
      وبلاگ
    </h1>
    <hr class="mx-auto w-75 " />
    <h5 class="text-center">
      نوشته های مرا در اینستاگرام، توییتر و شبکه های اجتماعی دیگر دنبال کنید
    </h5>
    <hr class="mx-auto w-75 " />
    <div class="row my-5">
      <div
        class="col-12 col-md-3 my-2"
        v-for="card in blog_card"
        :key="card.description"
      >
        <blog_card
          :title="card.title"
          :image="card.image"
          :description="card.description"
        >
        </blog_card>
      </div>
    </div>
  </div>
</template>
<script>
import blog_card from "@/components/cards/blog_card.vue";
export default {
  components: {
    blog_card
  },
  data() {
    return {
      blog_page: []
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.$axios
      .get("http://localhost:8080/api/article" + this.id)
      .then(response => {
        this.sample = response.data;
        console.log(this.blog_page);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
