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
    <section class="pb-10">
      <v-container fluid class="px-0 px-sm-4">
        <v-row>
          <v-col cols="12" md="6" order-md="last">
            <ImageSkills width="100%" height="100%" />
          </v-col>
          <v-col cols="12" md="6" class="d-flex align-center" order-md="first">
            <v-row>
              <v-col cols="12" lg="6">
                <v-card flat class="mb-5 mb-lg-0">
                  <v-card-text>
                    <div class="text-h5 font-weight-thin text-xl-h4 d-flex align-center">
                      <v-icon class="mr-3" color="primary">mdi-arrow-top-left-bold-outline</v-icon><span>UPGRADE</span>
                    </div>
                  </v-card-text>
                  <v-divider class="w-75"></v-divider>
                  <v-card-text class="font-weight-light">
                    Converting static site into modern <br /> dynamic one
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" lg="6">
                <v-card flat class="mb-5 mb-lg-0">
                  <v-card-text>
                    <div class="text-h5 font-weight-thin text-xl-h4 d-flex align-center">
                      <v-icon class="mr-3" color="primary">mdi-brush-outline</v-icon><span>DESIGN</span>
                    </div>
                  </v-card-text>
                  <v-divider class="w-75"></v-divider>
                  <v-card-text class="font-weight-light">
                    Designing a fully responsive frontend <br /> website
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" lg="6">
                <v-card flat class="mb-5 mb-lg-0">
                  <v-card-text>
                    <div class="text-h5 font-weight-thin text-xl-h4 d-flex align-center">
                      <v-icon class="mr-3" color="primary">mdi-cog-outline</v-icon><span>DEVELOPMENT</span>
                    </div>
                  </v-card-text>
                  <v-divider class="w-75"></v-divider>
                  <v-card-text class="font-weight-light">
                    Application backend, database and API <br /> end points
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" lg="6">
                <v-card flat class="mb-5 mb-lg-0">
                  <v-card-text>
                    <div class="text-h5 font-weight-thin text-xl-h4 d-flex align-center">
                      <v-icon class="mr-3" color="primary">mdi-check-circle-outline</v-icon><span>DEPLOYMENT</span>
                    </div>
                  </v-card-text>
                  <v-divider class="w-75"></v-divider>
                  <v-card-text class="font-weight-light">
                    Setting the server environment for live <br /> producton
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-lazy>
</template>
<style scoped>
section {
  background-color: #E9F3F8;
}
.v-card{
  background-color: inherit;
}
</style>