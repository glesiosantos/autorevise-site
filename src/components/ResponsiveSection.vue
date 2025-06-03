<script setup lang="ts">
</script>

<template>
  <section id="responsive" class="section-padding">
    <div class="container mx-auto container-padding">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="reveal">
          <img 
            src="https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="AutoRevise em múltiplos dispositivos" 
            class="rounded-xl shadow-xl"
          />
        </div>
        
        <div class="reveal">
          <h2 class="text-3xl md:text-4xl font-display font-bold text-secondary-800 mb-6">
            Acesse de qualquer lugar, em qualquer dispositivo
          </h2>
          
          <p class="text-lg text-secondary-600 mb-6">
            O AutoRevise é uma solução 100% web, otimizada para funcionar 
            perfeitamente tanto em computadores quanto em dispositivos móveis.
          </p>
          
          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <div class="flex-shrink-0 mr-3 mt-1">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke-width="1.5" 
                  stroke="currentColor" 
                  class="w-5 h-5 text-accent-500"
                >
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              <p class="text-secondary-600">
                <span class="font-medium text-secondary-800">Interface responsiva:</span> Adapta-se automaticamente ao tamanho da tela do seu dispositivo.
              </p>
            </li>
            
            <li class="flex items-start">
              <div class="flex-shrink-0 mr-3 mt-1">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke-width="1.5" 
                  stroke="currentColor" 
                  class="w-5 h-5 text-accent-500"
                >
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              <p class="text-secondary-600">
                <span class="font-medium text-secondary-800">Sincronização em tempo real:</span> Atualizações instantâneas em todos os dispositivos conectados.
              </p>
            </li>
            
            <li class="flex items-start">
              <div class="flex-shrink-0 mr-3 mt-1">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke-width="1.5" 
                  stroke="currentColor" 
                  class="w-5 h-5 text-accent-500"
                >
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              <p class="text-secondary-600">
                <span class="font-medium text-secondary-800">Acesso seguro:</span> Proteção de dados avançada independentemente do dispositivo utilizado.
              </p>
            </li>
          </ul>
          
          <a 
            href="#pricing" 
            class="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-lg text-lg transition-colors"
          >
            Experimente Agora
          </a>
        </div>
      </div>
    </div>
  </section>
</template>