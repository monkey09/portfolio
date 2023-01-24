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
    <section>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="text-center">
              <v-card-text>
                <StackHtml width="100" />    
              </v-card-text>
              <v-card-text>
                <div class="text-h6 font-weight-thin d-inline-block text-sm-h5 stack-header">
                  <div class="top-border"></div>
                  <div class="bottom-border"></div>
                  HTML
                </div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                Hypertext markup language the most basic building block of the Web It defines the meaning and structure of web content.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="text-center">
              <v-card-text>
                <StackCss width="100" />    
              </v-card-text>
              <v-card-text>
                <div class="text-h6 font-weight-thin d-inline-block text-sm-h5 stack-header">
                  <div class="top-border"></div>
                  <div class="bottom-border"></div>
                  CSS
                </div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                Stylesheet language used to describe the presentation of a document written in HTML or XML.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="text-center">
              <v-card-text>
                <StackJavascript width="100" />    
              </v-card-text>
              <v-card-text>
                <div class="text-h6 font-weight-thin d-inline-block text-sm-h5 stack-header">
                  <div class="top-border"></div>
                  <div class="bottom-border"></div>
                  JAVASCRIPT
                </div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                A lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="text-center">
              <v-card-text>
                <StackVuejs width="100" />    
              </v-card-text>
              <v-card-text>
                <div class="text-h6 font-weight-thin d-inline-block text-sm-h5 stack-header">
                  <div class="top-border"></div>
                  <div class="bottom-border"></div>
                  VUE
                </div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                An open-source model-view-viewmodel front end JavaScript framework for building user interfaces and single-page applications.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="text-center">
              <v-card-text>
                <StackNuxtjs width="100" />    
              </v-card-text>
              <v-card-text>
                <div class="text-h6 font-weight-thin d-inline-block text-sm-h5 stack-header">
                  <div class="top-border"></div>
                  <div class="bottom-border"></div>
                  NUXT
                </div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                An open source framework for vue.js framework under MIT license that makes web development simple and powerful.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="text-center">
              <v-card-text>
                <StackVuetify width="100" />    
              </v-card-text>
              <v-card-text>
                <div class="text-h6 font-weight-thin d-inline-block text-sm-h5 stack-header">
                  <div class="top-border"></div>
                  <div class="bottom-border"></div>
                  VUETIFY
                </div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                A Material Design component framework for Vue.js. It aims to provide all the tools necessary to create beautiful content rich applications.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="text-center">
              <v-card-text>
                <StackNode width="100" />    
              </v-card-text>
              <v-card-text>
                <div class="text-h6 font-weight-thin d-inline-block text-sm-h5 stack-header">
                  <div class="top-border"></div>
                  <div class="bottom-border"></div>
                  NODEJS
                </div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                An open-source, cross-platform JavaScript runtime environment allows you to run JavaScript on the server. 
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="text-center">
              <v-card-text>
                <StackMongo width="100" />    
              </v-card-text>
              <v-card-text>
                <div class="text-h6 font-weight-thin d-inline-block text-sm-h5 stack-header">
                  <div class="top-border"></div>
                  <div class="bottom-border"></div>
                  MONGO DB
                </div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                Developer data platform that provides the services and tools necessary to build distributed applications fast, at the performance and scale users demand.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="text-center">
              <v-card-text>
                <StackSocket width="100" />    
              </v-card-text>
              <v-card-text>
                <div class="text-h6 font-weight-thin d-inline-block text-sm-h5 stack-header">
                  <div class="top-border"></div>
                  <div class="bottom-border"></div>
                  SOCKET IO
                </div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                An event-driven library for real-time web applications. It enables real-time, bi-directional communication between web clients and servers.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="text-center">
              <v-card-text>
                <StackReact width="100" />    
              </v-card-text>
              <v-card-text>
                <div class="text-h6 font-weight-thin d-inline-block text-sm-h5 stack-header">
                  <div class="top-border"></div>
                  <div class="bottom-border"></div>
                  REACT
                </div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                A JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="text-center">
              <v-card-text>
                <StackNext width="100" />    
              </v-card-text>
              <v-card-text>
                <div class="text-h6 font-weight-thin d-inline-block text-sm-h5 stack-header">
                  <div class="top-border"></div>
                  <div class="bottom-border"></div>
                  NEXT
                </div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                Enables you to create full-stack web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="text-center">
              <v-card-text>
                <StackMantine width="100" />    
              </v-card-text>
              <v-card-text>
                <div class="text-h6 font-weight-thin d-inline-block text-sm-h5 stack-header">
                  <div class="top-border"></div>
                  <div class="bottom-border"></div>
                  MANTINE
                </div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                A feature-rich React component framework made for react lets you quickly create fully functional and accessible online applications.
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
section .v-card {
  background-color: inherit;
}
section .v-card .stack-header {
  color: #00d2d3;
  padding: 10px 15px;
  position: relative;
}
section .v-card .stack-header div.top-border{
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  border-top:2px solid #00d2d3;
  border-left:2px solid #00d2d3;
}
section .v-card .stack-header div.bottom-border{
  position: absolute;
  right: 0;
  bottom: 0;
  width: 30px;
  height: 30px;
  border-right:2px solid #00d2d3;
  border-bottom:2px solid #00d2d3;
}
</style>