<script setup lang="ts">
// Features data
const features = [
  {
    id: 1,
    title: 'Gestão de Clientes',
    description: 'Cadastre e gerencie informações completas dos seus clientes, incluindo histórico de serviços e preferências.',
    icon: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
  },
  {
    id: 2,
    title: 'Cadastro de Veículos',
    description: 'Mantenha um registro detalhado de todos os veículos atendidos, com histórico completo de manutenções.',
    icon: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12'
  },
  {
    id: 3,
    title: 'Catálogo de Produtos',
    description: 'Organize seu catálogo de peças e serviços com preços, códigos e informações detalhadas.',
    icon: 'M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z'
  },
  {
    id: 4,
    title: 'Controle de Estoque',
    description: 'Monitore níveis de estoque em tempo real, receba alertas de reposição e evite perdas.',
    icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125'
  },
  {
    id: 5,
    title: 'Gestão de Pedidos',
    description: 'Crie orçamentos, ordens de serviço e acompanhe o andamento de cada trabalho com facilidade.',
    icon: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z'
  },
  {
    id: 6,
    title: 'Contas a Pagar e Receber',
    description: 'Controle suas finanças com um sistema integrado de contas a pagar e receber, com relatórios detalhados.',
    icon: 'M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'
  },
  {
    id: 7,
    title: 'Relatórios Gerenciais',
    description: 'Acesse relatórios detalhados sobre faturamento, serviços mais realizados, desempenho de funcionários e muito mais.',
    icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z'
  }
];
</script>

<template>
  <section id="features" class="section-padding bg-gray-50">
    <div class="container mx-auto container-padding">
      <div class="text-center max-w-3xl mx-auto mb-16 reveal">
        <h2 class="text-3xl md:text-4xl font-display font-bold text-secondary-800 mb-6">
          Funcionalidades completas para sua oficina
        </h2>
        <p class="text-lg text-secondary-600">
          O AutoRevise reúne todas as ferramentas necessárias para modernizar 
          e otimizar a gestão da sua oficina em uma única plataforma intuitiva.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="feature in features" 
          :key="feature.id"
          class="bg-white rounded-xl p-6 shadow-feature transition-all duration-300 hover:shadow-lg hover:-translate-y-1 reveal"
        >
          <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-5">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="w-6 h-6 text-primary-600"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                :d="feature.icon"
              />
            </svg>
          </div>
          
          <h3 class="text-xl font-semibold text-secondary-800 mb-3">
            {{ feature.title }}
          </h3>
          
          <p class="text-secondary-600">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>