import { DragEvent, SyntheticEvent, useState } from 'react'
import { Nullable, prevent } from '../utils'

export const DropFile = ({ onDrop }: Props) => {
  const [isOver, setIsOver] = useState(false)
  const [file, setFile] = useState<Nullable<File>>(null)

  const getFile = async (e: SyntheticEvent<HTMLInputElement, Event>) => {
    const file = e.currentTarget.files?.item(0)
    send(file)
  }

  const saveFile = (e: DragEvent<HTMLFormElement>) => {
    prevent(e)
    setIsOver(false)
    const file = e.dataTransfer.files?.item(0)
    send(file)
  }

  const send = (file?: Nullable<File>) => {
    if (file) {
      setFile(file)
      onDrop(file)
    }
  }

  return (
    <form
      onDragOver={(e) => {
        prevent(e)
        setIsOver(true)
      }}
      onDragLeave={() => setIsOver(false)}
      onDrop={saveFile}
      onDragEnd={() => setIsOver(false)}
      className={`
        box has-advanced-upload 
        ${file && 'loaded'}
        ${isOver && 'is-dragover'}`}
    >
      <div className={`box__input `}>
        <input
          className="box__file"
          type="file"
          name="excel"
          accept=".xlsx"
          id="excel"
          onChange={getFile}
          data-multiple-caption="{count} files selected"
        />
        {file ? (
          <label className="box__label loaded" htmlFor="excel">
            <span className="box__dragndrop"> {file.name}</span>.
            <strong> Cambiar </strong>
          </label>
        ) : (
          <label className="box__label" htmlFor="excel">
            <strong>Escoje un archivo</strong>
            <span className="box__dragndrop"> o arrastralo aqui</span>.
          </label>
        )}
      </div>
    </form>
  )
}
type Props = {
  onDrop: (e: File) => Promise<void>
}
