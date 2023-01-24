<script setup>
const isActive = ref(false)
const loading = ref(false)
const count = ref(0)
const { data } = await useApi().getArticale(count.value)
const articales = ref([])
articales.value = data.value.response.docs
const readMore = async () => {
  loading.value = true
  count.value++
  const { data: more } = await useApi().getArticale(count.value)
  loading.value = false
  articales.value = [...articales.value, ...more.value.response.docs]
}
</script>
<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: .5
    }"
    transition="fade-transition"
    >
    <section>
      <v-container fluid class="px-0 px-sm-4">
        <v-row>
          <template v-for="(articale, i) in articales">
            <v-col cols="12" sm="6" md="4" lg="3"
            :key="i"
            v-if="articale.multimedia.length"
            >
              <v-card flat class="rounded-0-sm">
                <div class="new-image" :style="`background-image: url('https://static01.nyt.com/${articale.multimedia[0].url}')`"></div>
                <v-card-text class="pb-0">
                  {{ articale.headline.main }}
                </v-card-text>
                <v-card-text class="font-weight-light">
                  {{ articale.snippet }}
                </v-card-text>
              </v-card>
            </v-col>
          </template>
        </v-row>
        <v-btn @click="readMore" @touchend="readMore" v-touch="readMore" :loading="loading" flat class="mx-auto d-block text-white my-15 bg-primary">Read more</v-btn>
      </v-container>
    </section>
  </v-lazy>
</template>
<style scoped>
section {
  background-color: #E9F3F8;
}
.v-card{
  background-color: #F4F8FA;
}
.v-card .new-image {
  background-size: cover;
  background-position: center;
  height: 230px;
}
.v-card.btn-card{
  background-color: inherit;
}
</style>