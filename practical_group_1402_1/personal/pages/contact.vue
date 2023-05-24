<template>
  <div>
      <h1 class="text-center mb-5">
        ارتباط با من
        <!--textboxes and textarea-->
          <div class="rounded-pill  p-5 mb-5">
            <div class="text">
             <input type="text" id="inputname" placeholder="نام و نام خانوادگی خود را وارد کنید" class="form-control mb-3 w-50">
             <input type="text" id="inputemail" placeholder="ایمیل خود را وارد کنید" class="form-control mb-3 w-50">
             <textarea class="form-control mb-3 w-50" id="Textarea" placeholder="پیام خود را در این بخش وارد کنید"></textarea>
            </div>
             <button type="button" class="btn btn-primary">ارسال</button>
          </div>
      </h1>
  </div>
</template>


<style>
/*Bring in the middle textboxes and textarea*/
.text{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
