<template>

  <div class="row">
    <div class="col-6">
      <DPMGInputText v-model="texto" nome="TEXT" obrigatorio :errors="errors.texto" />
    </div>
    <div>
      TEXTO - {{ computedTexto }}
    </div>
  </div>

  <div class="row">
    <div class="col-6">
      <DPMGInputDateRange v-model="rangeDate" nome="RANGE DATE" obrigatorio />
    </div>
    <div>
      RANGE - {{ computedRangeDate }}
    </div>
  </div>

  <div class="row">
    <div class="col-6">
      <DPMGInputDate v-model="date" nome="DATE" obrigatorio />
    </div>
    <div>
      DATE - {{ computedDate }}
    </div>
  </div>

  <div class="row">
    <div class="col-6">
      <DPMGInputNumber v-model="number" nome="NUMBER" obrigatorio />
    </div>
    <div>
      NUMBER - {{ computedNumber }}
    </div>
  </div>

  <div class="row">
    <div class="col-6">
      <DPMGInputSelect v-model="select" nome="SELECT" obrigatorio :optionList="[
        { valor: 1, descricao: 'Opção1' },
        { valor: 2, descricao: 'Opção2' },
        { valor: 3, descricao: 'Opção3' },
        { valor: 4, descricao: 'Opção4' },
        { valor: 5, descricao: 'Opção5' },
      ]" />
    </div>
    <div>
      SELECT - {{ computedSelect }}
    </div>
  </div>

</template>

<script lang="ts" setup>
import {
  DPMGInputText,
  DPMGInputSelect,
  DPMGInputDateRange,
  DPMGInputDate,
  DPMGInputNumber
} from "dpmg-ui-kit";

import { useUserForm } from '@/stores/forms/teste.form';
import { storeToRefs } from 'pinia';
import { onMounted } from "vue";

const form = useUserForm()

const {
  texto,
  rangeDate,
  date,
  number,
  select,
  computedDate,
  computedNumber,
  computedRangeDate,
  computedSelect,
  computedTexto,
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