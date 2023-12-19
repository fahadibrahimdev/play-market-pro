<script setup>
import { heroSectionContent, buttonsLabel } from "@/@core/constants/home-view";
import SiteButton from "@/@core/components/SiteButton.vue";
import { scrollToSection } from "@/@core/utils/functions";
</script>

<template>
  <section id="home" class="relative">
    <div class="container pt-40 pb-60 lg:py-40 2xl:py-64">
      <div class="grid justify-end lg:grid-cols-2 gap-32 lg:gap-10 3xl:gap-10">
        <div class="text-white z-20">
          <h1 v-html="heroSectionContent.heading" class="text-4.5xl lg:text-5xl 3xl:text-7xl font-bold"></h1>
          <h3 class="text-xl lg:text-xl 2xl:text-3xl py-4 lg:pt-6 lg:pb-12 font-bold">
            {{ heroSectionContent.subHeading }}
          </h3>
          <p class="text-base lg:text-xl 2xl:text-3xl">
            {{ heroSectionContent.text }}
          </p>

          <div class="flex gap-5 pt-12 lg:pt-20 xl:pt-24 3xl:pt-38">
            <SiteButton>
              {{ buttonsLabel.CTOBtn }}
            </SiteButton>
            <SiteButton outlined @click="scrollToSection('whyUs')">
              {{ buttonsLabel.whyUsBtn }}
            </SiteButton>
          </div>
        </div>
        <div class="flex items-end justify-center lg:justify-end">
          <img class="-mb-80" :src="heroSectionContent.image" :alt="heroSectionContent.alt">
        </div>
      </div>
    </div>
  </section>
</template>
