<template>
  <div class="row q-mt-xl">

    <div class="col-sm-9 col-6">
      <DPMGInputText v-model="texto" nome="TEXT" obrigatorio :errors="errors.texto" />
    </div>

    <DPMGInputDateRange v-model="rangeDate" nome="RANGE DATE" obrigatorio />

    <DPMGInputDate v-model="date" nome="DATE" obrigatorio />

    <DPMGInputNumber v-model="number" nome="NUMBER" obrigatorio />

    <DPMGInputSelect v-model="select" nome="SELECT" obrigatorio :optionList="[
      { valor: 1, descricao: 'Opção1' },
      { valor: 2, descricao: 'Opção2' },
      { valor: 3, descricao: 'Opção3' },
      { valor: 4, descricao: 'Opção4' },
      { valor: 5, descricao: 'Opção5' },
    ]" />

    <q-btn label="abrir MODAL" color="primary" type="submit" size="sm" @click="() => abrir = true" />
    <q-btn label="abrir MODAL VIA COMPOSABLES" color="primary" type="submit" size="sm" @click="abrirModal" />
  </div>

  <div class="row q-mx-md">
    <p class="col-12">
      TEXTO - {{ computedTexto }}
    </p>
    <p class="col-12">
      RANGE - {{ computedRangeDate }}
    </p>
    <p class="col-12">
      DATE - {{ computedDate }}
    </p>
    <p class="col-12">
      NUMBER - {{ computedNumber }}
    </p>
    <p class="col-12">
      SELECT - {{ computedSelect }}
    </p>

  </div>
  <DPMGBaseModal v-model="abrir" @close="onClose" title="STI">
    <modal-teste-component />
    <template #actions>
      <q-btn flat label="Cancelar" @click="abrir = false" />
      <q-btn color="primary" label="Confirmar" @click="confirm" />
    </template>
  </DPMGBaseModal>
</template>

<script setup lang="ts">
import {
  DPMGInputText,
  DPMGInputSelect,
  DPMGInputDateRange,
  DPMGInputDate,
  DPMGInputNumber,
  DPMGBaseModal,
  useDPMGModal,
} from "dpmg-ui-kit";
import ModalTesteComponent from '@/components/modalTesteComponent.vue'
import { useUserForm } from '@/stores/forms/teste.form'
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";

const abrir = ref(false)
const form = useUserForm()
const { open } = useDPMGModal()

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
    component: ModalTesteComponent,
    persistent:true,
 
    cancel:{
      label:"cancelar",
    
    }
  })
}

onMounted(() => {
  form.setFieldValue('texto', 'TESTE')
  rangeDate.value = { from: "2026/01/08", to: "2026/01/22" }
  date.value = "2026/01/08"
  number.value = '654654'
  select.value = '1'
})
</script>