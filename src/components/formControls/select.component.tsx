import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useStore } from '../../useStore'

export function SelectInput() {
  const { categoriesStore } = useStore()
  const handleChange = (event: SelectChangeEvent) => {
    console.log(event)
  }

  return (
    <fieldset>
      <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        value={`${categoriesStore.categories[0].id}`}
        label="Categoria"
        className="select-input"
        onChange={handleChange}
      >
        {categoriesStore.categories.map((categorie) => (
          <MenuItem key={categorie.id} value={categorie.id}>
            {categorie.name}
          </MenuItem>
        ))}
      </Select>
    </fieldset>
  )
}
