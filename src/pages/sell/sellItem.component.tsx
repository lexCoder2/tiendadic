import { SellItemType } from '../../types/sellItem.type'

export function SellItem({ item }: { item: SellItemType }) {
  return (
    <div className="sell-item">
      <div className="close">&times;</div>
      <div className="sell-quantity">{item.quantity}</div>
      <div className="description">{item.product.description}</div>
      <div className="price">
        <span className="total">{item.total}</span>
      </div>
    </div>
  )
}
