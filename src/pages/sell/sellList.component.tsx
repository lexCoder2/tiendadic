import { observer } from 'mobx-react'
import { Box } from '../../components/box.component'
import { SellTicketType } from '../../types/sellTicket.type'
import { SellItem } from './sellItem.component'
import { useStore } from '../../useStore'

function SellListView({ list }: { list: SellTicketType }) {
  const { sellStore } = useStore()
  const onDeleteItem = (id: number = 0) => {
    sellStore.removeProduct(id)
  }

  return (
    <Box className="no-padding">
      <ul className="sell-list-items">
        {list.items.map((item, index) => (
          <SellItem onDeleteItem={onDeleteItem} key={index} item={item} />
        ))}
      </ul>
    </Box>
  )
}

const SellList = observer(SellListView)
export default SellList
