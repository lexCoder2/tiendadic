import { productColumnFields } from '../../entities/productFieldsTable'

export default function Header() {
  return (
    <div className="header-list">
      {productColumnFields.map((field) => (
        <div
          key={field.field}
          style={{
            fontWeight: 'bold',
            flexGrow: field.flex ?? 0,
            width: field.width,
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          {field.headerName}
        </div>
      ))}
    </div>
  )
}
