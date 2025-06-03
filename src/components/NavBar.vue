<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <a href="#" class="flex-shrink-0 flex items-center">
            <img class="h-8 w-auto" src="../assets/logo_horizontal.png" alt="Auto Revise">
            <!-- <span class="ml-2 text-xl font-bold text-primary-600">Auto Revise PRO</span> -->
          </a>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#" class="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
          <a href="#features" class="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">Funcionalidades</a>
          <a href="#responsive" class="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">App</a>
          <a href="#pricing" class="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">Planos</a>
          <a href="#contact" class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Contato</a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button 
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-secondary-600 hover:text-secondary-800 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
          >
            <span class="sr-only">Abrir menu</span>
            <svg 
              class="h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                v-if="!isOpen" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path 
                v-else 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div 
        :class="{'block': isOpen, 'hidden': !isOpen}" 
        class="md:hidden"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a 
            href="#" 
            class="block px-3 py-2 rounded-md text-base font-medium text-secondary-600 hover:text-secondary-800 hover:bg-secondary-100"
          >
            Home
          </a>
          <a 
            href="#features" 
            class="block px-3 py-2 rounded-md text-base font-medium text-secondary-600 hover:text-secondary-800 hover:bg-secondary-100"
          >
            Funcionalidades
          </a>
          <a 
            href="#responsive" 
            class="block px-3 py-2 rounded-md text-base font-medium text-secondary-600 hover:text-secondary-800 hover:bg-secondary-100"
          >
            App
          </a>
          <a 
            href="#pricing" 
            class="block px-3 py-2 rounded-md text-base font-medium text-secondary-600 hover:text-secondary-800 hover:bg-secondary-100"
          >
            Planos
          </a>
          <a 
            href="#contact" 
            class="block px-3 py-2 rounded-md text-base font-medium bg-primary-600 text-white hover:bg-primary-700"
          >
            Contato
          </a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Spacer to prevent content from hiding behind fixed navbar -->
  <div class="h-16"></div>
</template>