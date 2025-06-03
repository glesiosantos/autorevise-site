<script setup lang="ts">
const features = [
  'Gestão de clientes',
  'Gestão de contas a pagar',
  'Gestão de produtos',
  'Gestão de fornecedores',
  'Controle de estoque',
  'Gestão de pedidos'
];

const plans = [
  {
    name: 'Básico',
    price: '49,90',
    users: '02',
    features: features
  },
  {
    name: 'Intermediário',
    price: '69,90',
    users: '05',
    features: features,
    popular: true
  },
  {
    name: 'Profissional',
    price: '99,90',
    users: '10',
    features: features
  }
];
</script>

<template>
  <section id="pricing" class="section-padding bg-gray-50">
    <div class="container mx-auto container-padding">
      <div class="text-center max-w-3xl mx-auto mb-16 reveal">
        <h2 class="text-3xl md:text-4xl font-display font-bold text-secondary-800 mb-6">
          Escolha o plano ideal para sua oficina
        </h2>
        <p class="text-lg text-secondary-600">
          Preços transparentes e acessíveis para empresas de todos os tamanhos
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="plan in plans" 
          :key="plan.name"
          class="bg-white rounded-xl p-8 shadow-feature transition-all duration-300 hover:shadow-lg relative reveal"
          :class="{ 'border-2 border-accent-600': plan.popular }"
        >
          <div 
            v-if="plan.popular" 
            class="absolute top-0 right-8 -translate-y-1/2 bg-accent-600 text-black px-4 py-1 rounded-full text-sm font-medium"
          >
            Mais Popular
          </div>

          <h3 class="text-2xl font-bold text-secondary-800 mb-2">
            {{ plan.name }}
          </h3>

          <div class="flex items-baseline mb-6">
            <span class="text-4xl font-bold text-secondary-800">R$ {{ plan.price }}</span>
            <span class="text-secondary-600 ml-2">/mês</span>
          </div>

          <p class="text-secondary-600 mb-6">
            Até {{ plan.users }} usuários
          </p>

          <ul class="space-y-4 mb-8">
            <li 
              v-for="feature in plan.features" 
              :key="feature"
              class="flex items-center text-secondary-600"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-5 w-5 text-accent-600 mr-3 flex-shrink-0" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fill-rule="evenodd" 
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                  clip-rule="evenodd"
                />
              </svg>
              {{ feature }}
            </li>
          </ul>

          <a 
            target="_blank"
            href="https://wa.me/5586999430230?text=Ol%C3%A1%20estou%20vindo%20do%20site%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%A3o%20da%20AutoRevise%20PRO" 
            class="block w-full text-center py-3 px-6 rounded-lg transition-colors"
            :class="plan.popular ? 
              'bg-black hover:bg-accent-600 text-white' : 
              'bg-secondary-100 hover:bg-secondary-200 text-secondary-800'"
          >
            Começar Agora
          </a>
        </div>
      </div>
    </div>
  </section>
</template>