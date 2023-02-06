<script setup>
const isActive = ref(false)
</script>
<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: .5
    }"
    transition="fade-transition"
  >
  <section class="pt-sm-5 pb-10">
    <v-container fluid class="px-0 px-md-15">
        <v-row>
          <v-col cols="12" sm="6">
            <ImageHeader width="100%" height="100%" />
          </v-col>
          <v-col cols="12" sm="6" class="d-flex align-center">
            <v-card class="elevation-0 text-center">
              <v-card-text><LogoMonkey /></v-card-text>
              <v-card-text><div class="text-h4 text-sm-h2">Welcome!</div></v-card-text>
              <v-card-text class="font-weight-light">I'm ahmad hashim a full-stack web developer with a strong background in creating custom websites and applications.</v-card-text>
              <v-card-actions>
                <NuxtLink to="#breaf" class="mx-auto">
                  <v-btn class="bg-primary text-white">Read More</v-btn>
                </NuxtLink>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-lazy>
</template>
<style scoped>
section {
  background-color: #F4F8FA;
}
section .v-card {
  background-color: inherit;
}
section a {
  text-decoration: none !important;
  color: inherit !important;
}
</style>