<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer id="contact" class="bg-black text-white pt-16 pb-8">
    <div class="container mx-auto container-padding max-w-5xl">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div class="text-center md:text-left">
          <div class="flex items-center justify-center md:justify-start mb-6">
            <img src="../assets/logo_horizontal_pb.png"  alt="" srcset="">
          </div>
          <p class="text-secondary-300 mb-6">
            Solução completa para gestão de oficinas mecânicas que simplifica 
            processos e aumenta a produtividade do seu negócio.
          </p>
        </div>
        
        <div class="text-center md:text-left">
          <h4 class="text-lg font-bold mb-4">Produtos</h4>
          <ul class="space-y-3">
            <li><a href="#features" class="text-secondary-300 hover:text-white transition-colors">Funcionalidades</a></li>
            <li><a href="#pricing" class="text-secondary-300 hover:text-white transition-colors">Planos</a></li>
            <li><a href="#" class="text-secondary-300 hover:text-white transition-colors">Integrações</a></li>
            <li><a href="#" class="text-secondary-300 hover:text-white transition-colors">Novidades</a></li>
          </ul>
        </div>
        
        <div class="text-center md:text-left">
          <h4 class="text-lg font-bold mb-4">Contato</h4>
          <ul class="space-y-4 mb-8">
            <li class="flex items-start justify-center md:justify-start">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                class="w-5 h-5 text-secondary-300 mr-3 flex-shrink-0 mt-0.5"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" 
                />
              </svg>
              <span class="text-secondary-300">contato@autorevise.com.br</span>
            </li>
            <li class="flex items-start justify-center md:justify-start">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                class="w-5 h-5 text-secondary-300 mr-3 flex-shrink-0 mt-0.5"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" 
                />
              </svg>
              <span class="text-secondary-300">(86) 9.9943-0230</span>
            </li>
            <li class="flex items-start justify-center md:justify-start">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                class="w-5 h-5 text-secondary-300 mr-3 flex-shrink-0 mt-0.5"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" 
                />
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" 
                />
              </svg>
              <span class="text-secondary-300">
                Rua Des. Caio Oliveira, 8115<br>
                Teresina, PI - Brasil
              </span>
            </li>
          </ul>
          
          <div class="flex space-x-4 justify-center md:justify-start">
            <a href="#" class="text-secondary-300 hover:text-white transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-6 w-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" class="text-secondary-300 hover:text-white transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-6 w-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" class="text-secondary-300 hover:text-white transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-6 w-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div class="pt-8 mt-8 border-t border-secondary-700 text-center text-secondary-400">
        <p>© {{ currentYear }} AutoRevise. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>