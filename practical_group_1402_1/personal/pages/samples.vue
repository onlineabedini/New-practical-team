<template>
  <div>
    <div v-for="card in sample_card" :key="card.id">
      <h1>
        {{ card.title }}
      </h1>
    </div>
  </div>
</template>
<script>
export default {
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
          title: "نمونه کار 1",
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
          title: "نمونه کار 1",
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
<style scoped></style>
