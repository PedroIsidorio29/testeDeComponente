import { defineStore } from 'pinia'
import { useForm } from 'vee-validate'
import { testeSchema } from './teste.schema'
import type { TTesteSchema } from './teste.schema'
import { computed } from 'vue'

export const useUserForm = defineStore('userForm', () => {
  const { defineField, errors, setFieldValue } = useForm<TTesteSchema>({
    validationSchema: testeSchema,
  })

  const [texto] = defineField('texto')
  const [rangeDate] = defineField('rangeDate')
  const [date] = defineField('date')
  const [number] = defineField('number')
  const [select] = defineField('select')

  const computedTexto = computed(() => {
    // console.log('texto', texto.value);
    return texto.value;
  })
  const computedRangeDate = computed(() => {
    // console.log('rangeDate', rangeDate.value);
    return rangeDate.value;
  })
  const computedDate = computed(() => {
    // console.log('date', date.value);
    return date.value;
  })
  const computedNumber = computed(() => {
    // console.log('number', number.value);
    return number.value;
   })
  const computedSelect = computed(() => {
    // console.log("select", select.value);
    return select.value;
  })

  return {
    texto,
    rangeDate,
    date,
    number,
    select,
    setFieldValue,
    errors,
    computedTexto,
    computedRangeDate,
    computedDate,
    computedNumber,
    computedSelect,
  }
})
