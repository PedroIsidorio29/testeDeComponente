<template>

  <input-list-util />

  <div>
    <q-btn label="abrir MODAL" color="primary" type="submit" size="sm" @click="() => abrir = true" />
    <q-btn label="abrir MODAL VIA COMPOSABLES" color="primary" type="submit" size="sm" @click="abrirModal" />
  </div>

  <DPMGBaseModal v-model="abrir" @close="onClose" title="STI">
    <layout-test />
    <template #actions>
      <q-btn flat label="Cancelar" @click="abrir = false" />
      <q-btn color="primary" label="Confirmar" @click="confirm" />
    </template>
  </DPMGBaseModal>
</template>

<script setup lang="ts">
import inputListUtil from '@/components/input-list-util.vue'
import { DPMGBaseModal, useDPMGModal } from "dpmg-ui-kit";
import layoutTest from '@/components/layout-test.vue'
import { ref } from "vue";

const abrir = ref(false)
const { open } = useDPMGModal()

function confirm() {
  console.log('Confirmado')
  abrir.value = false
}

function onClose() {
  console.log('Modal fechado')
}

function abrirModal() {
  open<string>({
    title: 'DEFENDOR (A)',
    component: layoutTest,
    persistent: true

    /*  cancel:{
       label:"cancelar",
     
     } */
  })
}
</script>