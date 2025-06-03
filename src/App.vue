<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import ResponsiveSection from './components/ResponsiveSection.vue'
import PricingSection from './components/PricingSection.vue'
import FooterSection from './components/FooterSection.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
</script>

<template>
  <div class="min-h-screen">
    <NavBar />
    <main>
      <HeroSection />
      <FeaturesSection />
      <ResponsiveSection />
      <PricingSection />
    </main>
    <FooterSection />
    <WhatsAppButton />
  </div>
</template>