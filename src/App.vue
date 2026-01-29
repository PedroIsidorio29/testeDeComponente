<template>
  <div class="row q-mt-xl">

    <div class="col-sm-9 col-6">
      <DPMGInputText v-model="texto" nome="TEXT" obrigatorio :errors="errors.texto" />
    </div>

    <DPMGInputDateRange v-model="rangeDate" nome="RANGE DATE" obrigatorio />

    <DPMGInputDate v-model="date" nome="DATE" obrigatorio />

    <DPMGInputNumber v-model="number" nome="NUMBER" obrigatorio />

    <DPMGInputSelect v-model="select" nome="SELECT" obrigatorio :valores="[
      { value: 1, description: 'Opção1' },
      { value: 2, description: 'Opção2' },
      { value: 3, description: 'Opção3' },
      { value: 4, description: 'Opção4' },
      { value: 5, description: 'Opção5' },
    ]" />

    <q-btn
      label="teste"
      color="primary"
      type="submit"
      size="sm"
    />
  </div>

  <div class="row q-mx-md">
    {{ teste }}
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
import { computed, onMounted } from "vue";
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

const teste = computed(() => {
  console.log('texto', texto.value);
  console.log('rangeDate', rangeDate.value);
  console.log('date', date.value);
  console.log('number', number.value);
  console.log("select", select.value);
})

onMounted(() => {
  form.setFieldValue('texto', 'TESTE')
  rangeDate.value = { from: "2026/01/08", to: "2026/01/22" }
  date.value = "2026/01/08"
  number.value = '654654'
  select.value = '1'
})
</script>