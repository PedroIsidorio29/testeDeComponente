<template>
  <div class="row q-mt-xl">

    <div class="col-9">
      <DPMGInputText v-model="texto" nome="TEXT" obrigatorio :errors="errors.texto" />
    </div>

    <DPMGInputDateRange v-model="rangeDate" nome="RANGE DATE" obrigatorio />

    <div class="col-6">
      <DPMGInputDate v-model="date" nome="DATE" obrigatorio />
    </div>

    <DPMGInputNumber v-model="number" nome="NUMBER" obrigatorio />

    <DPMGInputSelect v-model="select" nome="SELECT" obrigatorio :valores="[
      { value: 1, description: 'Opção1' },
      { value: 2, description: 'Opção2' },
      { value: 3, description: 'Opção3' },
      { value: 4, description: 'Opção4' },
      { value: 5, description: 'Opção5' },
    ]" />

  </div>

  <div class="row q-mx-md">
    <p class="col-12">
      TEXTO - {{ texto }}
    </p>
    <p class="col-12">
      RANGE - {{ rangeDate }}
    </p>
    <p class="col-12">
      DATE - {{ date }}
    </p>
    <p class="col-12">
      NUMBER - {{ number }}
    </p>
    <p class="col-12">
      SELECT - {{ select }}
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
import { useUserForm } from '@/stores/forms/teste.form'
import { storeToRefs } from "pinia";

const form = useUserForm()
const {
  texto,
  rangeDate,
  date,
  number,
  select,
  errors
} = storeToRefs(useUserForm())

onMounted(() => {

  form.setFieldValue('texto', 'TESTE')
  rangeDate.value = { from: "2026/01/08", to: "2026/01/22" }
  date.value = "2026/01/08"
  number.value = '654654'
  select.value = '1'
})
</script>