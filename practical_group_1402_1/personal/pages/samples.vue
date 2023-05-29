<template>
  <div>
    <h1 class="text-center">نمونه کار های من</h1>
    <div class="line">
      <hr class="w-50">
      <h5 class="text-center">نوشته های من را در اینستاگرام، توییتر و شبکه های اجتماعی دیگر دنبال کنید</h5>
      <hr class="w-50  mb-5">
    </div>
 <sample_card v-for="sample in sample_card" :key="sample.id" :img_link="sample.img_url" :My_title="sample.title" :My_description="sample.description"></sample_card>
  </div>
</template>
<script>
import sample_card from "@/components/cards/sample_card.vue";
export default {
 components:{
  sample_card
 },
  data() {
    return {
      sample_card: {
        sample1: {
          id: 1,
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-QYyKqnWL_KjJFEVbzeafD1fOgUAWGdqNhA&usqp=CAU",
          title: "نمونه کار 1",
          description:
            "این یک نمونه کار آزمایشی از مالک وبسایت است که از سمت سرور برای شما ارسال شده.",
          data: `
        این  محتوای یک نمونه کار است که برای شما ارسال شده است تا بتوانید به درستی کار خود را توسعه دهید و در فرآیند یادگیری برنامه نویسی موفق شوید
        `,
        },
        sample2: {
          id: 1,
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-QYyKqnWL_KjJFEVbzeafD1fOgUAWGdqNhA&usqp=CAU",
          title: "نمونه کار 2",
          description:
            "این یک نمونه کار آزمایشی از مالک وبسایت است که از سمت سرور برای شما ارسال شده.",
          data: `
        این  محتوای یک نمونه کار است که برای شما ارسال شده است تا بتوانید به درستی کار خود را توسعه دهید و در فرآیند یادگیری برنامه نویسی موفق شوید
        `,
        },
        sample3: {
          id: 1,
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-QYyKqnWL_KjJFEVbzeafD1fOgUAWGdqNhA&usqp=CAU",
          title: "نمونه کار 3",
          description:
            "این یک نمونه کار آزمایشی از مالک وبسایت است که از سمت سرور برای شما ارسال شده.",
          data: `
        این  محتوای یک نمونه کار است که برای شما ارسال شده است تا بتوانید به درستی کار خود را توسعه دهید و در فرآیند یادگیری برنامه نویسی موفق شوید
        `,
        },
        sample4: {
          id: 1,
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-QYyKqnWL_KjJFEVbzeafD1fOgUAWGdqNhA&usqp=CAU",
          title: "نمونه کار 4",
          description:
            "این یک نمونه کار آزمایشی از مالک وبسایت است که از سمت سرور برای شما ارسال شده.",
          data: `
        این  محتوای یک نمونه کار است که برای شما ارسال شده است تا بتوانید به درستی کار خود را توسعه دهید و در فرآیند یادگیری برنامه نویسی موفق شوید
        `,
        },
      },
    };
  },
};
</script>
<style scoped>
.line{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
