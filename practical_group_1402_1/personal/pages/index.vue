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

        <SideImg></SideImg>


      </div>
    </div>



  </div>
</template>

<script>

import SideImg from '@/components/img_grid/index.vue'

export default {
  components: {
    SideImg
  }
}

</script>

<style>
.bd_shadow {
  box-shadow: 0px 0px 5px 1px rgb(81, 149, 158);
  padding: 2px;
}
</style>
