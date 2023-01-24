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
    <section class="py-10">
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat>
              <v-card-text>
                <div class="text-h6 font-weight-thin text-sm-h5 service-header">Website Design</div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                The process of planning, conceptualizing, and arranging content online.
              </v-card-text>
              <v-card-actions>
                <NuxtLink to="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Thinking_before_coding" target="blank">
                  <v-btn color="primary">Learn more</v-btn>
                </NuxtLink>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat>
              <v-card-text>
                <div class="text-h6 font-weight-thin text-sm-h5 service-header">Website Development</div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                The main non-design aspects of building web sites: writing markup and coding.
              </v-card-text>
              <v-card-actions>
                <NuxtLink to="https://developer.mozilla.org/en-US/docs/Learn" target="blank">
                  <v-btn color="primary">Learn more</v-btn>
                </NuxtLink>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat>
              <v-card-text>
                <div class="text-h6 font-weight-thin text-sm-h5 service-header">Responsive Web Design</div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                Smartphones, laptops, tablets… No matter how people browse, your content will display beautifully across all devices.
              </v-card-text>
              <v-card-actions>
                <NuxtLink to="https://developer.mozilla.org/en-US/docs/Glossary/Responsive_web_design" target="blank">
                  <v-btn color="primary">Learn more</v-btn>
                </NuxtLink>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat>
              <v-card-text>
                <div class="text-h6 font-weight-thin text-sm-h5 service-header">E-commerce Solutions</div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                Complex web apps, not available "out of the box," and are designed to capture, process, store data, shopping carts and login forms.
              </v-card-text>
              <v-card-actions>
                <NuxtLink to="https://en.wikipedia.org/wiki/E-commerce" target="blank">
                  <v-btn color="primary">Learn more</v-btn>
                </NuxtLink>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat>
              <v-card-text>
                <div class="text-h6 font-weight-thin text-sm-h5 service-header">Custom Web Applications</div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                Your business is unique. Get a customized website application that's a perfect fit for how you run your business.
              </v-card-text>
              <v-card-actions>
                <NuxtLink to="https://neurosys.com/blog/what-is-custom-web-application-development" target="blank">
                  <v-btn color="primary">Learn more</v-btn>
                </NuxtLink>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat>
              <v-card-text>
                <div class="text-h6 font-weight-thin text-sm-h5 service-header">Content Management Systems (CMS)</div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                Make your life easier with a CMS-powered website that your entire team can effortlessly manage.
              </v-card-text>
              <v-card-actions>
                <NuxtLink to="https://developer.mozilla.org/en-US/docs/Glossary/CMS" target="blank">
                  <v-btn color="primary">Learn more</v-btn>
                </NuxtLink>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat>
              <v-card-text>
                <div class="text-h6 font-weight-thin text-sm-h5 service-header">Search Engine Optimization (SEO)</div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                Appear in the top spots for popular search terms, drive organic traffic to your website, and attract new customers.
              </v-card-text>
              <v-card-actions>
                <NuxtLink to="https://developer.mozilla.org/en-US/docs/Glossary/SEO" target="blank">
                  <v-btn color="primary">Learn more</v-btn>
                </NuxtLink>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat>
              <v-card-text>
                <div class="text-h6 font-weight-thin text-sm-h5 service-header">Social Media Integration</div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                Build brand awareness, generate customer engagement, and drive sales leads by fostering an online community.
              </v-card-text>
              <v-card-actions>
                <NuxtLink to="https://www.indeed.com/career-advice/career-development/what-is-social-media-integration" target="blank">
                  <v-btn color="primary">Learn more</v-btn>
                </NuxtLink>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat>
              <v-card-text>
                <div class="text-h6 font-weight-thin text-sm-h5 service-header">Point of sales systems (POS)</div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                Allows your business to accept payments from customers and keep track of sales.
              </v-card-text>
              <v-card-actions>
                <NuxtLink to="https://www.investopedia.com/terms/p/point-of-sale.asp" target="blank">
                  <v-btn color="primary">Learn more</v-btn>
                </NuxtLink>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat>
              <v-card-text>
                <div class="text-h6 font-weight-thin text-sm-h5 service-header">Small business landpage</div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                Benefits your business in numerous ways. it gives your visitors a sneak peek into what your business is all about.
              </v-card-text>
              <v-card-actions>
                <NuxtLink to="https://mailchimp.com/marketing-glossary/landing-pages/" target="blank">
                  <v-btn color="primary">Learn more</v-btn>
                </NuxtLink>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat>
              <v-card-text>
                <div class="text-h6 font-weight-thin text-sm-h5 service-header">Web Hosting & Maintenance</div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                Reliable web hosting that never lets you down. A second faster download might mean a transaction that you can close.
              </v-card-text>
              <v-card-actions>
                <NuxtLink to="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host" target="blank">
                  <v-btn color="primary">Learn more</v-btn>
                </NuxtLink>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat>
              <v-card-text>
                <div class="text-h6 font-weight-thin text-sm-h5 service-header">Domain Name Registration</div>
              </v-card-text>
              <v-card-text class="font-weight-light">
                a unique, easy-to-remember address to access website.
              </v-card-text>
              <v-card-actions>
                <NuxtLink to="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_domain_name" target="blank">
                  <v-btn color="primary">Learn more</v-btn>
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
  background-color: #F4F8FA;
}
.service-header {
  text-transform: uppercase !important;
}
.v-card-text {
  padding-bottom: 0px;
}
</style>