import { InputProp } from '../../types/productInput.type'
import { observer } from 'mobx-react'
import { action } from 'mobx'
import { forwardRef, Ref } from 'react'

interface InputProps {
  input: InputProp
  value: string | number
  onChange: (val: any) => void
  clear?: boolean
  error?: boolean
  autoFocus?: boolean
  className?: string
}
export function InputView(
  { value, input, autoFocus, onChange, className }: InputProps,
  ref: Ref<HTMLInputElement>
) {
  return (
    <fieldset className={className}>
      <label>{input.label}</label>
      <input
        ref={ref}
        type="text"
        autoFocus={!!autoFocus}
        required={input.required}
        id="outlined-required"
        value={value}
        onChange={action((e) => onChange(e.target.value))}
        onFocus={(e) => e.target.select()}
      />
    </fieldset>
  )
}
const Input = observer(forwardRef(InputView))
export { Input }
