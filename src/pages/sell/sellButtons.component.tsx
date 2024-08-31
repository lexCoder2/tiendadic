import { observer } from 'mobx-react'

const SellButtonsView = () => {
  const onDelete = (sellId: number) => {}

  return (
    <div className="sell-btn-container">
      <button
        onClick={() => onDelete(1)}
        className="btn-secondary btn-cancel "
        type="button"
      >
        cancelar
      </button>
      <button className="btn-sell" type="button">
        Pagar <span> $250.00</span>
      </button>
    </div>
  )
}

const SellButtons = observer(SellButtonsView)

export default SellButtons
