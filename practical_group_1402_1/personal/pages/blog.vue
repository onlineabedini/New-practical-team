<template>
    <!-- html -->
    <div>
      <!-- div that contains all elements -->
    <div class="row">
        <!-- left sidebar -->
        <div class="margin margintop col-sm-2 p-3 bg-secondary bg-opacity-10 border border-secondary rounded-start rounded-end">
            <!-- ads div -->
            <div>
                <h2>this is ad area</h2>
                <p>you can add you ad here</p>
            </div>
        </div>
        <!-- main div that contains all main elements -->
        <div class="col margintop container-sm txtalign p-3 bg-secondary bg-opacity-10 border border-secondary rounded-start rounded-end">
            <!-- the top div that contains description -->
            <div class="txtalign container-sm">
                <h2 class="">وبلاگ</h2>
                <p class=" txtalign p-3 bg-secondary bg-opacity-10 border border-secondary border-start-0 border-end-0 ">.صفحات مرا در اینستاگرام ,توییتر و شبکه های اجتماعی دیگر دنبال کنید</p>
            </div>
            <!-- parent div of articles div -->
            <div>
                <!-- row seprator -->
                <div class="row  txtalign">
                    <div class=" margin   border border-success-subtle col txtalign widthlimit">
                        <blog_card :img_url="blog.img_url" :title="blog.title" :description="blog.description">
                        </blog_card>
                    </div>

                </div>
            </div>
        </div>
        <!-- right sidebar -->
        <div class=" margin margintop col-sm-2 p-3 bg-secondary bg-opacity-50 border border-secondary rounded-start rounded-end">
            <!-- sample menu buttons for side bar -->
            <div class="btn-group-vertical txtalign " role="group" aria-label="Vertical button group">
                <button type="button" class="btn btn-primary">Article search</button>
                <button type="button" class="btn btn-secondary">Add article</button>
                <button type="button" class="btn btn-danger">Report article</button>
              </div>
        </div>
    </div>
    </div>
  
  </template>
  <script>
  
  //this is for java script

  import blog_card from '@/components/cards/blog_card.vue'
  
  </script>
  <style scoped>
  
  /* this is for css */
  .txtalign{
        text-align: center;
        
        width: fit-content;
    }
    .widthlimit{
        max-width: 200px;
    }
    .imgwidthlimit{
        max-width: 170px;
        margin-top: 3px;
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
