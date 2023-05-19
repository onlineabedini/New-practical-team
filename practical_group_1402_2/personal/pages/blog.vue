<template>
    <div>
      <h1 class="text-center">
        وبلاگ
      </h1>
      <hr class="mx-auto w-75 ">
        <h5 class="text-center">
          نوشته های مرا در اینستاگرام، توییتر و شبکه های اجتماعی دیگر دنبال کنید
        </h5>
        <hr class="mx-auto w-75 ">
      <div class="row my-5">
        <div class="col-12 col-md-3 my-2"
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
  export default{
    data(){
      return{
         blog_card:{
          card1:{
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdA5MfKFatETsAboD-9fN32nu91tutqEBow&usqp=CAU",
            title:"مقاله 1",
            description:"این یک مقاله آرزمایشی است که از سمت سرور برای شما ارسال شده است.",
          },
          card2:{
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdA5MfKFatETsAboD-9fN32nu91tutqEBow&usqp=CAU",
            title:"مقاله 2",
            description:"این یک مقاله آرزمایشی است که از سمت سرور برای شما ارسال شده است.",
          },
          card3:{
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdA5MfKFatETsAboD-9fN32nu91tutqEBow&usqp=CAU",
            title:"مقاله 3",
            description:"این یک مقاله آرزمایشی است که از سمت سرور برای شما ارسال شده است.",
          },
          card4:{
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdA5MfKFatETsAboD-9fN32nu91tutqEBow&usqp=CAU",
            title:"مقاله 4",
            description:"این یک مقاله آرزمایشی است که از سمت سرور برای شما ارسال شده است.",
          },
          card5:{
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdA5MfKFatETsAboD-9fN32nu91tutqEBow&usqp=CAU",
            title:"مقاله 5",
            description:"این یک مقاله آرزمایشی است که از سمت سرور برای شما ارسال شده است.",
          },
          card6:{
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdA5MfKFatETsAboD-9fN32nu91tutqEBow&usqp=CAU",
            title:"مقاله 6",
            description:"این یک مقاله آرزمایشی است که از سمت سرور برای شما ارسال شده است.",
          },
          card7:{
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdA5MfKFatETsAboD-9fN32nu91tutqEBow&usqp=CAU",
            title:"مقاله 7",
            description:"این یک مقاله آرزمایشی است که از سمت سرور برای شما ارسال شده است.",
          },
          card8:{
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdA5MfKFatETsAboD-9fN32nu91tutqEBow&usqp=CAU",
            title:"مقاله 8",
            description:"این یک مقاله آرزمایشی است که از سمت سرور برای شما ارسال شده است.",
          },
  
         },
      };
    },
    components:{
      blog_card,
    },
    
  };
      
    
  