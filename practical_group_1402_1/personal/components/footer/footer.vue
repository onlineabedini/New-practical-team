<template>
  <!-- html -->
  <div>
    <div class="border p-5 mb-0  rounded-5">
      <div class="row">
        <div class="col-1">
          <img src="@/static/img/me.jpg" class="my_image rounded-2">
        </div>
        <div class="my_text col-7">
          <h2>علیرضا عابدینی</h2>
          <h5>دانشجوی مهندسی نرم افزار و دیجیتال مارکتینگ</h5>
        <hr>
          <h5>درباره من</h5>
          <small><h6><small>از سال 94 بخاطر علاقه زیاد به زمینه برنامه نویسی زبان نشانه گذاری html را یاد گرفتم و وارد عرصه وب شدم،سپس با یادگیری زبان های فرانت اند در این راستا شروع به کار کردم با کسب تجربه در این راستا و با یادگیری وردپرس فعالیت تخصصی من در این راستا آغاز شد و دوره جدیدی در زندگیم شروع شد که نهایتا مرا به جایگاه کنونی رساند.</small></h6></small>
        </div>
        <div class="col-4">
          <div class="join border rounded-2 p-3">
            <h5 class="class_1">عضویت در خبرنامه/اخبار</h5>
            <h6 class="class_2"><small>در خبرنامه عضو شوید و از آخرین اخبار ، تخفیف ها و خدمات من باخبر شوید.</small></h6>
           <input type="text" id="inputpost" placeholder="پست الکترونیکی " class="form-control rounded-pill p-0 mb-2">
            <button type="button" class="btn btn-outline-light">ثبت</button>
          </div>
        </div>
      </div>
      <div class="p-5">
      <hr class="my_hr mb-3">
      <h6 class="text_2">طراحی شده توسط تیم مطالعاتی آی آر نود/تمامی حقوق این وبسایت محفوظ و کپی برداری ممنوع است.</h6>
      </div>
    </div>
  </div>
</template>

<script>
//this is for java script
</script>

<style scoped>
/* this is for css */
.border{
  background-color: #454545;
}
.my_text{
  text-align: right;
  padding-right: 150px;
  color: white;
}
.my_image{
  height: 230px;
  width: 280%;
}
.join{
  text-align: right;
}
.class_1{
  color: white;
}
.class_2{
  color: white;

}
.btn{
  text-align: right;
}
.my_hr{
  text-align: right;
  color:black;
}
.text_2{
  color: white;
  text-align: right;
}
</style>
