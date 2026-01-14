import { object, string, mixed } from 'yup'
import type { InferType } from 'yup'

export const testeSchema = object({
  texto: string().required('texto é obrigatório'),
  rangeDate: object({
    from: string().notRequired(),
    to: string().notRequired(),
  }),
  date: string().notRequired(),
  number: string().notRequired(),
  select: mixed().notRequired().test(
    'string-or-number',
    'Deve ser string ou número',
    value => typeof value === 'string' || typeof value === 'number'
  ),
})

export type TTesteSchema = InferType<typeof testeSchema>