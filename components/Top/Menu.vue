<script setup>
const isActive = ref(false)
const drawer = ref(false)
const links = ref([
  {
    title: 'Home',
    value: '#home'
  },
  {
    title: 'About Me',
    value: '#aboutme'
  },
  {
    title: 'Services',
    value: '#services'
  },
  {
    title: 'Portfolio',
    value: '#portfolio'
  },
  {
    title: 'Stack',
    value: '#stack'
  },
  {
    title: 'Teck News',
    value: '#news'
  },
  {
    title: 'Why me',
    value: '#whyme'
  },
  {
    title: 'Thank You',
    value: '#thankyou'
  },
])
</script>

<template>
  <v-lazy
    v-model="isActive"
    location="top"
    :options="{
      threshold: .5
    }"
    min-height="1"
    transition="fade-transition"
    >
    <div>
      <v-app-bar app elevation="0" color="primary">
        <!-- collapsed icon -->
        <v-app-bar-nav-icon variant="text" class="d-md-none text-white" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <!-- expanded links -->
        <div class="d-none d-md-block">
          <NuxtLink v-for="(link, i) in links" :key="i" :to="{hash: link.value}">
            <v-btn stacked color="#FFF">{{ link.title }}</v-btn>
          </NuxtLink>
        </div>
        <v-spacer></v-spacer>
      </v-app-bar>
      <!-- collapsed links -->
      <v-navigation-drawer
        v-model="drawer"
        location="bottom"
        temporary
        style="height: calc(100% - 64px)"
        app
      >
        <v-list class="link-list">
          <NuxtLink v-for="(link, i) in links" :key="i" :to="link.value">
            <v-list-item>
              {{ link.title }}
            </v-list-item>
          </NuxtLink>
        </v-list>
      </v-navigation-drawer>
    </div>
  </v-lazy>
</template>
<style scoped>
a{
  color:inherit;
  text-decoration: none;
}
.link-list{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
}
</style>