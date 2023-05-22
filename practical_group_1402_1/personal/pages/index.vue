<template>
  <div>
    <div class="row">
      <div class="col-8">
        <div class="text-start w-76 bd_shadow rounded">
          <p>مهارت های من</p>
        </div>
        <p class="p-2" style="margin-top: 10px;"> برنامه نویسی</p>

        <!-- progress bar for  مهارت های من  -->

        <div class="container">
          <div div class="mx-auto">
            <div class="progress w-55 " style="height: 30px;">
              <div class="progress-bar progress-bar-striped progress-bar-animated text-end pe-3" role="progressbar"
                style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">vue js </div>
            </div>

            <div class="progress w-55 mt-1" style="height: 30px;">
              <div class="progress-bar progress-bar-striped progress-bar-animated text-end pe-3 " role="progressbar"
                style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"> Nuxt js </div>
            </div>
          </div>
        </div>

        <p class="p-2" style="margin-top: 10px;">مهارت های دیگر </p>

        <!-- progress bar for  مهارت های دیگر -->

        <div class="container">
          <div class="mx-auto">
            <div class="progress w-55 " style="height: 30px;">
              <div class="progress-bar progress-bar-striped progress-bar-animated bg-success text-end pe-3"
                role="progressbar" style="width: 45%" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">فن بیان
              </div>
            </div>

            <div class="progress w-55 mt-1" style="height: 30px;">
              <div class="progress-bar progress-bar-striped bg-success progress-bar-animated text-end pe-3 "
                role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"> زبان
                انگلیسی </div>
            </div>

            <div class="progress w-55 mt-1" style="height: 30px;">
              <div class="progress-bar progress-bar-striped bg-success progress-bar-animated text-end pe-3 "
                role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"> مدیریت
                اسکرام </div>
            </div>
          </div>
        </div>

        <div class="text-start w-76 bd_shadow rounded mt-5">

          <!-- about me section -->

          <p>درباره من</p>
        </div>
        <p class="p-2 text-break w-76">
          به دلیل تعریف شدن برنامه نویسی با استفاده از کد های زیبا و ساده برای ساخت برنامه های خود به دنبال برنامه
          نویسی با
          استفاده از کد های زیبا و ساده برای ساخت برنامه های خود به دنبال برنامه نویسی با استفاده از کد های زیبا و
          ساده برای ساخت برنامه های خود به دنبال برنامه نویسی با استفاده از کد های زیبا و ساده برای ساخت برنامه های
          خود به
          دنبال برنامه نویسی با استفاده از کد های زیبا و ساده برای ساخت برنامه های خود به دنبال
        </p>

        <div class="text-start w-76 bd_shadow rounded">

          <!-- blog post section -->

          <p>پست های وبلاگ</p>
        </div>
        <p class="p-2"> test</p>
      </div>
      <div class="col-4">

        <!-- picture section -->

        <div class="row row-cols-2 bd_shadow rounded ps-3">
          <div class="col position-relative">
            <p class="position-absolute top-50 start-50 translate-middle text-white fs-2">پروژه</p>
            <img class="p-1 " src="../static/img/2.jpg" alt="پروژه" style="width: 200px;">
          </div>
          <div class="col position-relative">
            <p class="position-absolute top-50 start-50 translate-middle text-white fs-2">مقاله</p>
            <img class="p-1" src="../static/img/4.jpg" alt="مقاله" style="width: 200px;">
          </div>
          <div class="col position-relative">
            <p class="position-absolute top-50 start-50 translate-middle text-white fs-2">دانشگاه</p>
            <img class="p-1 mt-1" src="../static/img/3.jpg" alt="" style="width: 200px;">
          </div>
          <div class="col position-relative">
            <p class="position-absolute top-50 start-50 translate-middle text-white fs-2">سرگرمی</p>
            <img class="p-1 mt-1" src="../static/img/5.jpg" alt="سرگرمی" style="width: 200px;">
          </div>
        </div>

      </div>
    </div>




  </div>
</template>

<script>
</script>

<style>
.bd_shadow {
  box-shadow: 0px 0px 5px 1px rgb(81, 149, 158);
  padding: 2px;
}
</style>
