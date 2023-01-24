<script setup>
const props = defineProps(['title', 'text', 'son0', 'son1'])
</script>
<template>
  <div class="father">
    <div class="son2">
      <v-card flat style="background-color:inherit;width:550px;text-align: center;overflow: visible;">
        <div class="title-image"></div>
        <v-card-text><div class="text-h4 section-title text-sm-h2">{{ props.title }}</div></v-card-text>
        <v-card-text class="font-weight-thin">“{{ props.text }}”</v-card-text>
      </v-card>
    </div>
    <div class="son0" :style="`background-color: ${ props.son0 }`"></div>
    <div class="son1" :style="`background-color: ${ props.son1 }`"></div>
  </div>
</template>
<style scoped>
.title-image {
  background-image: url('../../assets/img/stroke.png');
  background-size: cover;
  background-position: center;
  width: 110px;
  height: 152px;
  left: calc(50% - 55px);
  top: -30px;
  transform: rotate(90deg);
  z-index: -10;
  position: absolute;
}
.section-title{
  color: #3F3D56;
}
.father {
  position: relative;
  width: 100%;
  height: 400px;
  background-color: #F4F8FA;
}
.son0 {
  clip-path: polygon(0 0, 0 100%, 100% 0);
  position: absolute;
  /* background-color: #F4F8FA; */
  width:100%;
  height: 100%;
}
.son1 {
  clip-path: polygon(100% 0, 0 100%, 100% 100%);
  position: absolute;
  /* background-color: #E9F3F8; */
  width:100%;
  height: 100%;
}
.son2{
  position: absolute;
  align-items: center;
  justify-content: center;
  display: flex;
  width:100%;
  height:100%;
  z-index: 1;
}
</style>