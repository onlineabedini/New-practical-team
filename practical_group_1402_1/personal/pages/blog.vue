<template>
    <!-- designed by amir.a -->
    <div>
      <!-- div that contains all elements -->
    <div class="row">
        <!-- left sidebar -->
        <div class="margin margintop col-sm-2 p-3  border border-secondary rounded-start rounded-end txtalign">
            
            <!-- sample menu buttons for side bar -->
            <div class="btn-group-vertical txtalign" role="group" aria-label="Vertical button group">
                <button type="button" class="btn btn-primary">Article search</button>
                <button type="button" class="btn btn-secondary">Add article</button>
                <button type="button" class="btn btn-danger">Report article</button>
              </div>
            
        </div>
        <!-- main div that contains all main elements -->
        <div class="col margintop container-sm txtalign p-3  border border-secondary rounded-start rounded-end">
            <!-- the top div that contains description -->
            <div class="txtalign container-sm">
                <h2 class="">وبلاگ</h2>
                <p class=" txtalign p-3  border border-secondary border-start-0 border-end-0 ">.صفحات مرا در اینستاگرام ,توییتر و شبکه های اجتماعی دیگر دنبال کنید</p>
            </div>
            <!-- parent div of articles div -->
            <div>
                <!-- row seprator -->
                <div class="row  txtalign">
                    
                        <blog_card class="border border-secondary border-start-0 border-end-0 col-3" v-for="blog in blog_card" :key="blog.id" :blog_img_link="blog.img_url" :blog_title="blog.title" :blog_description="blog.description">
                        </blog_card>
                    

                </div>
            </div>
        </div>
        <!-- right sidebar -->
        <div class=" margin margintop col-sm-2 p-3  border border-secondary rounded-start rounded-end">
            <!-- ads div -->
            <div>
              
              <h2>this is ad area</h2>
              <p>you can add you ad here</p>
          </div>
            
        </div>
        
    </div>
    
    </div>
  
  </template>
  <script>
  
  //this is for java script

  import blog_card from '@/components/cards/blog_card.vue'
  
  export default {
 components:{
  blog_card
 },
  data() {
    return {
      blog_card: {
        sample1: {
          id: 1,
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-QYyKqnWL_KjJFEVbzeafD1fOgUAWGdqNhA&usqp=CAU",
          title: "مقاله 1",
          description:
            "این یک مقاله آزمایشی است که از سمت سرور برای شما ارسال شده است.",
         
        },
        sample2: {
          id: 2,
          img_url:
            "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/08/BMD-3398-760x400.png",
          title: "مقاله 2",
          description:
            "این یک مقاله آزمایشی است که از سمت سرور برای شما ارسال شده است.",
          
        },
        sample3: {
          id: 3,
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-QYyKqnWL_KjJFEVbzeafD1fOgUAWGdqNhA&usqp=CAU",
          title: "مقاله 3",
          description:
            "این یک مقاله آزمایشی است که از سمت سرور برای شما ارسال شده است.",
          
        },
        sample4: {
          id: 4,
          img_url:
            "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/08/BMD-3398-760x400.png",
          title: "مقاله 4",
          description:
            "این یک مقاله آزمایشی است که از سمت سرور برای شما ارسال شده است.",
          
        },
        sample5: {
          id: 5,
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-QYyKqnWL_KjJFEVbzeafD1fOgUAWGdqNhA&usqp=CAU",
          title: "مقاله 5",
          description:
            "این یک مقاله آزمایشی است که از سمت سرور برای شما ارسال شده است.",
         
        },
        sample6: {
          id: 6,
          img_url:
            "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/08/BMD-3398-760x400.png",
          title: "مقاله 6",
          description:
            "این یک مقاله آزمایشی است که از سمت سرور برای شما ارسال شده است.",
          
        },
        sample7: {
          id: 7,
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-QYyKqnWL_KjJFEVbzeafD1fOgUAWGdqNhA&usqp=CAU",
          title: "مقاله 7",
          description:
            "این یک مقاله آزمایشی است که از سمت سرور برای شما ارسال شده است.",
          
        },
        sample8: {
          id: 8,
          img_url:
            "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/08/BMD-3398-760x400.png",
          title: "مقاله 8",
          description:
            "این یک مقاله آزمایشی است که از سمت سرور برای شما ارسال شده است.",
          
        },
      },
    };
  },
};
  </script>
  <style scoped>
  
  /* this is for css */
  .txtalign{
        text-align: center;
        
        width: fit-content;
    }
    .margin{
        margin-left: 5px;
        margin-right: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .margintop{
        margin-top: 50px;
    }
  </style>
