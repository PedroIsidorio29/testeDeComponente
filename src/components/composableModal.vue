<template>
      <q-btn label="Modal Composable" color="primary" type="submit" size="sm" @click="abrirModal" />
</template>

<script setup lang="ts">
import layoutTest from '@/components/layout-test.vue'
import { useDPMGModal } from "dpmg-ui-kit";

const { open } = useDPMGModal()

function abrirModal() {
  open<string>({
    title: 'Modal Composable',
    component: layoutTest,
    persistent: true

    /*  cancel:{
       label:"cancelar",
     
     } */
  })
}

</script>