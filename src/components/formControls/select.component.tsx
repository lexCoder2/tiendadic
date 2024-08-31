import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useStore } from '../../useStore'
import { observer } from 'mobx-react'
import { useState } from 'react'

function SelectInputView({ onSelected, className }: any) {
  const { categoriesStore } = useStore()
  const [selected, setSelected] = useState(categoriesStore.categories[0].name)
  const handleChange = (event: any) => {
    setSelected(event.target.value)
    onSelected(selected)
  }

  return (
    <fieldset className={className}>
      <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        value={selected}
        label="Categoria"
        className="select-input"
        onChange={handleChange}
      >
        {categoriesStore.categories.map((category) => (
          <MenuItem key={category.id} value={category.name}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </fieldset>
  )
}

const SelectInput = observer(SelectInputView)

export default SelectInput
