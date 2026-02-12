<template>

  <input-list-util />
  
  <div class="row wrap justify-around">
    <declarative-modal />
    <composable-modal />
  </div>

  
</template>

<script setup lang="ts">
import declarativeModal from '@/components/declarativeModal.vue'
import composableModal from '@/components/composableModal.vue'
import inputListUtil from '@/components/input-list-util.vue'
</script>