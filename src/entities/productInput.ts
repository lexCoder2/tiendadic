import { InputProp } from "../types/productInput.type"

export const inputProp = (props: { id?: any; label: any; value: any; description?: any }): InputProp => {
  return ({
    id:props.id ?? props.label,
    value: props.value,
    label: props.label,
    description: props.description ?? props.label,
    error: false,
    required: false
  })
}