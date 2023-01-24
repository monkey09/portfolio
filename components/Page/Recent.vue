<script setup>
const isActive = ref(true)
const page1 = ref("none")
const page2 = ref("none")
const page3 = ref("none")
const page4 = ref("none")
const page5 = ref("none")
const page6 = ref("none")
const page7 = ref("none")
const page8 = ref("none")
const page9 = ref("none")
const page10 = ref("none")
const page11 = ref("none")
const page12 = ref("none")
const page13 = ref("none")
const page14 = ref("none")
const page15 = ref("none")
const page16 = ref("none")
const page17 = ref("none")
const page18 = ref("none")
const page19 = ref("none")
const page20 = ref("none")
const page21 = ref("none")
const page22 = ref("none")
const page23 = ref("none")
const page24 = ref("none")
const page25 = ref("none")
const page26 = ref("none")
const handleClick = () => {
    page1.value = "none"
    page2.value = "none"
    page3.value = "none"
    page4.value = "none"
    page5.value = "none"
    page6.value = "none"
    page7.value = "none"
    page8.value = "none"
    page9.value = "none"
    page10.value = "none"
    page11.value = "none"
    page12.value = "none"
    page13.value = "none"
    page14.value = "none"
    page15.value = "none"
    page16.value = "none"
    page17.value = "none"
    page18.value = "none"
    page19.value = "none"
    page20.value = "none"
    page21.value = "none"
    page22.value = "none"
    page23.value = "none"
    page24.value = "none"
    page25.value = "none"
    page26.value = "none"
}
</script>
<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
    transition="fade-transition"
  >
    <section>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page1 = 'block'
              }"
            >
              <img
                src="../../assets/pages/tourland.png"
                :style="`display: ${page1}`"
                style="width: 100%"
              />
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page2 = 'block'
              }"
            >
              <img
                src="../../assets/img/page6.png"
                :style="`display: ${page2}`"
                style="width: 100%"
              />
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page3 = 'block'
              }"
            >
              <img
                src="../../assets/pages/cafe.jpg"
                :style="`display: ${page3}`"
                style="width: 100%"
              />
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page4 = 'block'
              }"
            >
              <img
                src="../../assets/pages/delta.png"
                :style="`display: ${page4}`"
                style="width: 100%"
              />
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page5 = 'block'
              }"
            >
              <img
                src="../../assets/img/page5.png"
                :style="`display: ${page5}`"
                style="width: 100%"
              />
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page6 = 'block'
              }"
            >
              <img
                src="../../assets/pages/mizuxe.png"
                :style="`display: ${page6}`"
                style="width: 100%"
              />
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page7 = 'block'
              }"
            >
              <img
                src="../../assets/pages/state.png"
                :style="`display: ${page7}`"
                style="width: 100%"
              />
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page8 = 'block'
              }"
            >
              <img
                src="../../assets/pages/news.jpg"
                :style="`display: ${page8}`"
                style="width: 100%"
              />
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page9 = 'block'
              }"
            >
              <img
                src="../../assets/pages/gapy.png"
                :style="`display: ${page9}`"
                style="width: 100%"
              />
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page10 = 'block'
              }"
            >
              <img
                src="../../assets/pages/home.png"
                :style="`display: ${page10}`"
                style="width: 100%"
              />
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page11 = 'block'
              }"
            >
              <video src="../../assets/videos/shop.mp4" :style="`display: ${page11}`" :autoplay="page11 == 'block' ? true : false" width="100%" height="100%"></video>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page12 = 'block'
              }"
            >
              <video src="../../assets/videos/pixi.mp4" :style="`display: ${page12}`" :autoplay="page12 == 'block' ? true : false" width="100%" height="100%"></video>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page13 = 'block'
              }"
            >
              <img
                src="../../assets/pages/courses.jpg"
                :style="`display: ${page13}`"
                style="width: 100%"
              />
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page14 = 'block'
              }"
            >
              <img
                src="../../assets/img/page7.png"
                :style="`display: ${page14}`"
                style="width: 100%"
              />
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page15 = 'block'
              }"
            >
              <img
                src="../../assets/pages/mob.jpg"
                :style="`display: ${page15}`"
                style="width: 100%"
              />
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page16 = 'block'
              }"
            >
              <img
                src="../../assets/pages/doctor.jpg"
                :style="`display: ${page16}`"
                style="width: 100%"
              />
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page17 = 'block'
              }"
            >
              <img
                src="../../assets/pages/blog.png"
                :style="`display: ${page17}`"
                style="width: 100%"
              />
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page18 = 'block'
              }"
            >
              <img
                src="../../assets/pages/shoes.png"
                :style="`display: ${page18}`"
                style="width: 100%"
              />
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page19 = 'block'
              }"
            >
              <img
                src="../../assets/pages/stock.jpg"
                :style="`display: ${page19}`"
                style="width: 100%"
              />
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page20 = 'block'
              }"
            >
              <img
                src="../../assets/img/page3.jpg"
                :style="`display: ${page20}`"
                style="width: 100%"
              />
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page21 = 'block'
              }"
            >
              <img
                src="../../assets/pages/school.png"
                :style="`display: ${page21}`"
                style="width: 100%"
              />
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page22 = 'block'
              }"
            >
              <img
                src="../../assets/img/page2.png"
                :style="`display: ${page22}`"
                style="width: 100%"
              />
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page23 = 'block'
              }"
            >
              <img
                src="../../assets/pages/showcase.jpg"
                :style="`display: ${page23}`"
                style="width: 100%"
              />
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page24 = 'block'
              }"
            >
              <img
                src="../../assets/pages/manage.png"
                :style="`display: ${page24}`"
                style="width: 100%"
              />
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page25 = 'block'
              }"
            >
              <img
                src="../../assets/img/page4.png"
                :style="`display: ${page25}`"
                style="width: 100%"
              />
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              class="w-100"
              height="175"
              @click="() => {
                handleClick()
                page26 = 'block'
              }"
            >
              <img
                src="../../assets/pages/captur.png"
                :style="`display: ${page26}`"
                style="width: 100%"
              />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-lazy>
</template>
<style scoped>
section {
  background-color: #e9f3f8;
}
section .v-card {
  background-size: cover;
  background-position-x: center;
  background-repeat: no-repeat;
  overflow-y: scroll;
}
section .v-card img, section .v-card video {
    min-height: 100%!important;
}
section .v-col-12:nth-child(1) .v-card {
  background-image: url("../../assets/img/page1.png");
}
section .v-col-12:nth-child(2) .v-card {
  background-image: url("../../assets/img/page6.png"); 
}
section .v-col-12:nth-child(3) .v-card {
  background-image: url("../../assets/img/page8.png");
}
section .v-col-12:nth-child(4) .v-card {
  background-image: url("../../assets/img/page9.png");
}
section .v-col-12:nth-child(5) .v-card {
  background-image: url("../../assets/img/page5.png");
}
section .v-col-12:nth-child(6) .v-card {
  background-image: url("../../assets/img/page10.png");
}
section .v-col-12:nth-child(7) .v-card {
  background-image: url("../../assets/img/page14.png");
}
section .v-col-12:nth-child(8) .v-card {
  background-image: url("../../assets/img/page15.png");
}
section .v-col-12:nth-child(9) .v-card {
  background-image: url("../../assets/img/page13.png");
}
section .v-col-12:nth-child(10) .v-card {
  background-image: url("../../assets/img/page16.png");
  
}
section .v-col-12:nth-child(11) .v-card {
  background-image: url("../../assets/img/page11.png");
}
section .v-col-12:nth-child(12) .v-card {
  background-image: url("../../assets/img/page12.png");
}
section .v-col-12:nth-child(13) .v-card {
  background-image: url("../../assets/img/page17.png");
}
section .v-col-12:nth-child(14) .v-card {
  background-image: url("../../assets/img/page7.png"); 
}
section .v-col-12:nth-child(15) .v-card {
  background-image: url("../../assets/img/page18.png");
}
section .v-col-12:nth-child(16) .v-card {
  background-image: url("../../assets/img/page22.jpg");
}
section .v-col-12:nth-child(17) .v-card {
  background-image: url("../../assets/img/page25.png");
}
section .v-col-12:nth-child(18) .v-card {
  background-image: url("../../assets/img/page20.png");
}
section .v-col-12:nth-child(19) .v-card {
  background-image: url("../../assets/img/page19.png");
}
section .v-col-12:nth-child(20) .v-card {
  background-image: url("../../assets/img/page3.jpg"); 
}
section .v-col-12:nth-child(21) .v-card {
  background-image: url("../../assets/img/page21.jpg");
}
section .v-col-12:nth-child(22) .v-card {
  background-image: url("../../assets/img/page2.png"); 
}
section .v-col-12:nth-child(23) .v-card {
  background-image: url("../../assets/img/page23.png");
}
section .v-col-12:nth-child(24) .v-card {
  background-image: url("../../assets/img/page24.png");
}
section .v-col-12:nth-child(25) .v-card {
  background-image: url("../../assets/img/page4.png");    
}
section .v-col-12:nth-child(26) .v-card {
  background-image: url("../../assets/img/page26.png");
}
</style>
