<template>
  <v-app>
    <v-main>
      <VoiceCommander />
      
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  // Importamos el componente. 
  // Asegúrate de que el archivo VoiceCommander.vue existe en src/components/
  import VoiceCommander from './components/VoiceCommander.vue'
</script>