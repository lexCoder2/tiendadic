import { SellItemType } from '../../types/sellItem.type'

type Props = {
  onDeleteItem: (id: number | undefined) => void
  item: SellItemType
}

export function SellItem({ item, onDeleteItem }: Props) {
  return (
    <div className="sell-item">
      <div onClick={() => onDeleteItem(item.product?.id)} className="close">
        &times;
      </div>
      <div className="sell-quantity">{item.quantity}</div>
      <div className="description">{item.product?.description}</div>
      <div className="price">
        <span className="total">{item.total}</span>
      </div>
    </div>
  )
}
