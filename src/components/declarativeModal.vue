<template>
  <q-btn label="Modal Declarativo" color="primary" type="submit" size="sm" @click="() => abrir = true" />

  <DPMGBaseModal v-model="abrir" @close="onClose" title="Modal Declarativo">
    <layout-test />
    <template #actions>
      <q-btn flat label="Cancelar" @click="abrir = false" />
      <q-btn color="primary" label="Confirmar" @click="confirm" />
    </template>
  </DPMGBaseModal>

</template>

<script setup lang="ts">
import layoutTest from '@/components/layout-test.vue'
import { DPMGBaseModal } from "dpmg-ui-kit";
import { ref } from 'vue';

const abrir = ref(false)

function confirm() {
  console.log('Confirmado')
  abrir.value = false
}

function onClose() {
  console.log('Modal fechado')
}



</script>