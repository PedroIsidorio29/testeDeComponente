<template>
  <div class="row">
    <DPMGInputText v-model="teste" nome="input text" obrigatorio />
    <DPMGInputDateRange v-model="teste" nome="input text" obrigatorio />
    <DPMGInputSelect v-model="teste" nome="input text" obrigatorio :valores="[
      { value: 1, description: 'Teste opção' },
      { value: 2, description: 'Teste opção1' },
      { value: 3, description: 'Teste opção2' },
      { value: 4, description: 'Teste opção3' },
      { value: 5, description: 'Teste opção4' },
    ]" />

    {{ teste }}
  </div>
</template>

<script setup lang="ts">
import { DPMGInputText, DPMGInputSelect, DPMGInputDateRange } from "dpmg-ui-kit";
import { onMounted, ref } from "vue";

const teste = ref<any>('')

onMounted(() => {
  // teste.value = { from: "2026/01/08", to: "2026/01/22" }
  // teste.value = 1
  // teste.value = 'dasdasd'
})
</script>

<style scoped></style>
