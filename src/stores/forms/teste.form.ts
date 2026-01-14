import { defineStore } from 'pinia'
import { useForm } from 'vee-validate'
import { testeSchema } from './teste.schema'
import type { TTesteSchema } from './teste.schema'

export const useUserForm = defineStore('userForm', () => {
  const { defineField, errors ,setFieldValue} = useForm<TTesteSchema>({
    validationSchema: testeSchema,
  })

  const [texto] = defineField('texto')
  const [rangeDate] = defineField('rangeDate')
  const [date] = defineField('date')
  const [number] = defineField('number')
  const [select] = defineField('select')

  return {
    texto,
    rangeDate,
    date,
    number,
    select,
    setFieldValue,
    errors
  }
})
