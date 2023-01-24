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
    <section class="pb-15">
      <v-container fluid class="px-0 px-sm-4">
        <v-row align="center">
          <v-col cols="12" md="6">
            <ImageFeatures width="100%" height="100%" />
          </v-col>
          <v-col cols="12" md="6">
            <v-card flat>
              <v-card-text>
                <div class="text-h5 font-weight-thin text-sm-h4 d-flex align-center">
                  <v-icon class="mr-3" color="primary">mdi-clock-fast</v-icon><span>SPEED DELIVERY</span>
                </div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                In today's fast-paced world, speed is essential. i will help you to deliver your products and services quickly and efficiently in order to stay competitive.
              </v-card-text>
            </v-card>
            <v-card flat>
              <v-card-text>
                <div class="text-h5 font-weight-thin text-sm-h4 d-flex align-center">
                  <v-icon class="mr-3" color="primary">mdi-cash</v-icon><span>BEST FINANCIAL BUDGET</span>
                </div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                You can choose your own financial plan and determine the most suited budgeting methods for your business or organization.
              </v-card-text>
            </v-card>
            <v-card flat>
              <v-card-text>
                <div class="text-h5 font-weight-thin text-sm-h4 d-flex align-center">
                  <v-icon class="mr-3" color="primary">mdi-hand-heart</v-icon><span>EFFECTIVE SOLUTIONS</span>
                </div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                Finding effective solutions to problems can be difficult, but it is essential for any business or organization i can guide you to the right path.
              </v-card-text>
            </v-card>
            <v-card flat>
              <v-card-text>
                <div class="text-h5 font-weight-thin text-sm-h4 d-flex align-center">
                  <v-icon class="mr-3" color="primary">mdi-wrench-clock</v-icon><span>LONG TIME MAINTENANCE</span>
                </div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                Maintaining applications over a long period, ensuring long-term maintenance addressing any issues or problems that occurs.
              </v-card-text>
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
.v-card {
  background-color: inherit;
}
</style>