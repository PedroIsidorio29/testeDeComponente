<template>
  <div >
    
    <DPMGInputText v-model="testeTexto" nome="TEXT" obrigatorio errors="teste"/>
    <DPMGInputDateRange v-model="testeRange" nome="RANGE DATE" obrigatorio />
    <DPMGInputDate v-model="testeDate" nome="DATE" obrigatorio />
    <DPMGInputNumber v-model="testeNumber" nome="NUMBER" obrigatorio />
    <DPMGInputSelect v-model="testeSelect" nome="SELECT" obrigatorio :valores="[
      { value: 1, description: 'Teste opção' },
      { value: 2, description: 'Teste opção1' },
      { value: 3, description: 'Teste opção2' },
      { value: 4, description: 'Teste opção3' }, 
      { value: 5, description: 'Teste opção4' },
    ]" />

</div>

<div class="row q-mx-md">
  <p class="col-12">
    TEXTO  -  {{ testeTexto }} 
  </p>
  <p class="col-12">
    RANGE  -  {{testeRange}} 
  </p>
  <p class="col-12">
    DATE  -  {{ testeDate }} 
  </p>
  <p class="col-12">
    NUMBER  -  {{ testeNumber }} 
  </p>
  <p class="col-12">
    SELECT  -  {{ testeSelect}}
  </p>

</div>
</template>

<script setup lang="ts">
import { 
  DPMGInputText, 
  DPMGInputSelect, 
  DPMGInputDateRange, 
  DPMGInputDate, 
  DPMGInputNumber 
} from "dpmg-ui-kit";
import { onMounted, ref } from "vue";

const testeTexto = ref<any>('')
const testeRange = ref<any>('')
const testeDate = ref<any>('')
const testeNumber = ref<any>('')
const testeSelect = ref<any>('')

onMounted(() => {

testeTexto.value = 'TESTE'
testeRange.value = { from: "2026/01/08", to: "2026/01/22" }
testeDate.value = "2026/01/08"
testeNumber.value = 654654
testeSelect.value = 1
})
</script>

<style scoped></style>
