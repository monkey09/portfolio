<template>
  <section>
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="4">
          <NuxtLink to="/" class="justify-center d-flex align-center">
            <LogoMonkey2 class="mb-15" style="opacity: .2" />
          </NuxtLink>
        </v-col>
        <v-col cols="12" sm="6" md="3" lg="2">
          <div class="text-h6 font-weight-thin mb-5 text-sm-h5">SECTIONS</div>
          <NuxtLink to="#home"><v-btn variant="text" color="primary" class="pl-0 d-block">HOME</v-btn></NuxtLink>
          <NuxtLink to="#aboutme"><v-btn variant="text" color="primary" class="pl-0 d-block">ABOUT ME</v-btn></NuxtLink>
          <NuxtLink to="#services"><v-btn variant="text" color="primary" class="pl-0 d-block">SERVICES</v-btn></NuxtLink>
          <NuxtLink to="#portfolio"><v-btn variant="text" color="primary" class="pl-0 d-block">PORTFOLIO</v-btn></NuxtLink>
          <NuxtLink to="#stack"><v-btn variant="text" color="primary" class="pl-0 d-block">STACK</v-btn></NuxtLink>
          <NuxtLink to="#news"><v-btn variant="text" color="primary" class="pl-0 d-block">TECK NEWS</v-btn></NuxtLink>
          <NuxtLink to="#whyme"><v-btn variant="text" color="primary" class="pl-0 d-block">WHY ME</v-btn></NuxtLink>
          <NuxtLink to="#thankyou"><v-btn variant="text" color="primary" class="pl-0 d-block">THANK YOU</v-btn></NuxtLink>
        </v-col>
        <v-col cols="12" sm="6" md="3" lg="2">
          <div class="text-h6 font-weight-thin mb-5 text-sm-h5">SERVICES</div>
          <v-btn variant="text" color="primary" class="pl-0 d-block">WEB DESIGN</v-btn>
          <v-btn variant="text" color="primary" class="pl-0 d-block">WEB DEVELOPMENT</v-btn>
          <v-btn variant="text" color="primary" class="pl-0 d-block">DEPLOYMENT</v-btn>
          <v-btn variant="text" color="primary" class="pl-0 d-block">UPGRADING</v-btn>
        </v-col>
        <v-col cols="12" sm="6" md="3" lg="2">
          <div class="text-h6 font-weight-thin mb-5 text-sm-h5">PRODUCTS</div>
          <v-btn variant="text" color="primary" class="pl-0 d-block">CUSTOM APPS</v-btn>
          <v-btn variant="text" color="primary" class="pl-0 d-block">E-COMMERCE</v-btn>
          <v-btn variant="text" color="primary" class="pl-0 d-block">(CMS)</v-btn>
          <v-btn variant="text" color="primary" class="pl-0 d-block">(POS)</v-btn>
          <v-btn variant="text" color="primary" class="pl-0 d-block">(SEO)</v-btn>
        </v-col>
        <v-col cols="12" sm="6" md="3" lg="2">
          <div class="text-h6 font-weight-thin mb-5 text-sm-h5">SKILLS</div>
          <v-btn variant="text" color="primary" class="pl-0 d-block">REACTJS</v-btn>
          <v-btn variant="text" color="primary" class="pl-0 d-block">VUEJS</v-btn>
          <v-btn variant="text" color="primary" class="pl-0 d-block">NODEJS</v-btn>
          <v-btn variant="text" color="primary" class="pl-0 d-block">NOSQL</v-btn>      
          <NuxtLink to="https://www.facebook.com/profile.php?id=100011092238324" target="blank">
            <v-btn
              class="mx-0"
              icon="mdi-facebook"
              variant="plain"
              size="small"
            ></v-btn>
          </NuxtLink>
          <NuxtLink to="https://github.com/monkey09" target="blank">
            <v-btn
              class="mx-0"
              icon="mdi-github"
              variant="plain"
              size="small"
            ></v-btn>
          </NuxtLink>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<style scoped>
section {
  background-color: #E9F3F8
}
a{
  color: #00d2d3;
  text-decoration: none;
}
</style>