<script setup lang="ts">
</script>

<template>
  <section class="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <div 
        class="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80 mix-blend-multiply"
      ></div>
      <img 
        src="../assets/mecanico_hero.jpg" 
        alt="Gestão de Oficina" 
        class="h-full w-full object-cover object-center"
      />
    </div>
    
    <div class="container mx-auto container-padding relative z-10">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
          Transforme a gestão da sua oficina com o AutoRevise
        </h1>
        
        <p class="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
          Simplifique o dia a dia da sua oficina com nossa solução completa. 
          Gerencie clientes, veículos, estoque e finanças em um único lugar, 
          aumentando a produtividade e melhorando seus resultados.
        </p>
        
        <div class="flex flex-wrap gap-4">
          <a 
            href="#pricing" 
            class="bg-accent-50 hover:bg-accent-600 text-black font-medium px-6 py-3 rounded-lg text-lg transition-colors"
          >
            Ver Planos
          </a>
          
          <a 
            href="#features" 
            class="bg-white hover:bg-gray-100 text-black font-medium px-6 py-3 rounded-lg text-lg transition-colors"
          >
            Conheça as Funcionalidades
          </a>
        </div>
      </div>
    </div>
  </section>
</template>