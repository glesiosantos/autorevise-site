import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Scroll reveal animation
const app = createApp(App);
app.mount('#app');

window.addEventListener('scroll', function() {
  const reveals = document.querySelectorAll('.reveal');
  
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;
    
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
  }
});