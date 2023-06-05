<template>
  <div>
    <div class="text-center">
      <h1>نمونه کارهای من</h1>
      <h5 class="text-center">
        نوشته های مرا در اینستاگرام، توییتر و شبکه های اجتماعی دیگر دنبال کنید
      </h5>
    </div>
    <sample_card />
  </div>
</template>

<script>
import sample_card from "@/components/cards/sample_card.vue";
export default {
  components: {
    sample_card
  },
  data() {
    return {
      sample_page: [],
      id: 1
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.$axios
      .get("http://localhost:8080/api/sample" + this.id)
      .then(response => {
        this.sample = response.data;
        console.log(this.sample_page);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style scoped></style>
