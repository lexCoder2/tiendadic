import { SellItemType } from './sellItem.type'

export type SellTicketType = {
  name: string
  date?: Date
  total: number
  img?: string
  items: SellItemType[]
}
